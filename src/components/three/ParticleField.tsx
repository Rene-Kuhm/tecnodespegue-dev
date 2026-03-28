"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom vertex shader — circular soft particles con drift orgánico via sines
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;

  attribute vec3 aColor;

  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    vec3 pos = position;

    // Drift orgánico: combinación de senos con frecuencias distintas por eje
    float t = uTime * 0.13;
    float s = 0.45;
    pos.x += sin(pos.y * s + t * 1.1) * cos(pos.z * s * 0.7 + t * 0.9) * 0.55;
    pos.y += cos(pos.x * s + t * 0.95) * sin(pos.z * s * 0.8 + t * 1.05) * 0.55;
    pos.z += sin(pos.x * s * 0.6 + t * 1.2) * cos(pos.y * s + t * 0.85) * 0.35;

    // Rotación global muy lenta
    float a = uTime * 0.025;
    float ca = cos(a), sa = sin(a);
    pos.xz = vec2(ca * pos.x - sa * pos.z, sa * pos.x + ca * pos.z);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);

    // Tamaño varía por profundidad + ruido basado en posición seed
    float sizeNoise = 0.65 + 0.35 * sin(position.x * 3.7 + position.y * 2.3);
    gl_PointSize = uSize * sizeNoise * (380.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;

    vColor = aColor;

    // Alpha: más tenue en profundidad, palpita suavemente
    float depth = clamp((-mv.z - 1.5) / 14.0, 0.0, 1.0);
    float pulse = 0.85 + 0.15 * sin(uTime * 0.6 + position.x * 1.3 + position.z * 0.9);
    vAlpha = pulse * (1.0 - depth * 0.6) * 0.75;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3  vColor;
  varying float vAlpha;

  void main() {
    // Partícula circular con glow suave tipo halo
    vec2  uv   = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;

    // Núcleo brillante + halo exterior
    float core = 1.0 - smoothstep(0.0, 0.25, dist);
    float halo = 1.0 - smoothstep(0.15, 0.5, dist);
    float alpha = core * 0.9 + halo * 0.4;

    gl_FragColor = vec4(vColor, alpha * vAlpha);
  }
`;

// PRNG determinista — misma seed = mismas partículas en server y client
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface ParticleFieldProps {
  count?: number;
}

export function ParticleField({ count = 2000 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef    = useRef<THREE.ShaderMaterial>(null);

  const { positions, colors } = useMemo(() => {
    const rand      = mulberry32(42);
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);

    const primary   = new THREE.Color("#7c6fff");
    const secondary = new THREE.Color("#00e5ff");
    const accent    = new THREE.Color("#ff6b9d");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Distribución esférica con capa exterior más densa
      const radius = 2.5 + rand() * 7;
      const theta  = rand() * Math.PI * 2;
      const phi    = Math.acos(2 * rand() - 1);

      positions[i3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Mix de 3 colores con peso
      const t   = rand();
      const mix = rand();
      let   col: THREE.Color;
      if (mix < 0.6)       col = primary.clone().lerp(secondary, t);
      else if (mix < 0.85) col = secondary.clone().lerp(accent, t);
      else                 col = accent.clone().lerp(primary, t);

      colors[i3]     = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    return { positions, colors };
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSize: { value: 0.028 },
  }), []);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aColor"   args={[colors, 3]}    />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}
