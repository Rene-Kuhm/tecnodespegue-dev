"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Shader de displacement para la esfera principal
const sphereVertex = /* glsl */ `
  uniform float uTime;
  uniform float uDistort;

  varying vec3  vNormal;
  varying float vDisplace;

  // Hash para ruido pseudo-aleatorio
  float hash(vec3 p) {
    p = fract(p * vec3(443.9, 441.4, 437.2));
    p += dot(p, p.yxz + 19.2);
    return fract((p.x + p.y) * p.z);
  }

  // Value noise 3D suave
  float noise3(vec3 p) {
    vec3 i  = floor(p);
    vec3 f  = fract(p);
    vec3 u  = f * f * (3.0 - 2.0 * f);

    float n000 = hash(i);
    float n100 = hash(i + vec3(1,0,0));
    float n010 = hash(i + vec3(0,1,0));
    float n110 = hash(i + vec3(1,1,0));
    float n001 = hash(i + vec3(0,0,1));
    float n101 = hash(i + vec3(1,0,1));
    float n011 = hash(i + vec3(0,1,1));
    float n111 = hash(i + vec3(1,1,1));

    return mix(
      mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
      mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
      u.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise3(p);
      p  = p * 2.0 + vec3(1.7, 9.2, 3.4);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vNormal = normal;

    vec3 pos       = position;
    float n        = fbm(pos * 1.4 + uTime * 0.18);
    float displace = (n - 0.5) * uDistort;

    pos      += normal * displace;
    vDisplace = displace;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const sphereFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3  uColor;
  uniform vec3  uEmissive;

  varying vec3  vNormal;
  varying float vDisplace;

  void main() {
    // Color base que cambia levemente con el displacement
    vec3 col = mix(uColor, uEmissive, vDisplace * 3.0 + 0.3);

    // Fresnel edge glow
    vec3  viewDir = normalize(cameraPosition - vNormal);
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.5);
    col += uEmissive * fresnel * 0.8;

    // Pulso suave
    float pulse = 0.85 + 0.15 * sin(uTime * 0.9);
    gl_FragColor = vec4(col * pulse, 0.55);
  }
`;

export function FloatingGeometry() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef  = useRef<THREE.Mesh>(null);
  const octa1Ref  = useRef<THREE.Mesh>(null);
  const octa2Ref  = useRef<THREE.Mesh>(null);
  const ringRef   = useRef<THREE.Mesh>(null);

  const sphereUniforms = useMemo(() => ({
    uTime:    { value: 0 },
    uDistort: { value: 0.45 },
    uColor:   { value: new THREE.Color("#5a52d9") },
    uEmissive:{ value: new THREE.Color("#00e5ff") },
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (sphereRef.current) {
      (sphereRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.z = t * 0.18;
    }
    if (octa1Ref.current) {
      octa1Ref.current.rotation.x = t * 0.4;
      octa1Ref.current.rotation.y = t * 0.55;
    }
    if (octa2Ref.current) {
      octa2Ref.current.rotation.y = -t * 0.35;
      octa2Ref.current.rotation.z = t * 0.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.12;
      ringRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <>
      {/* Esfera principal con displacement shader */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh ref={sphereRef} position={[4.2, 0.4, -2.5]}>
          <icosahedronGeometry args={[1.35, 5]} />
          <shaderMaterial
            vertexShader={sphereVertex}
            fragmentShader={sphereFragment}
            uniforms={sphereUniforms}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.FrontSide}
          />
        </mesh>
      </Float>

      {/* Torus con material emissive fuerte */}
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.0}>
        <mesh ref={torusRef} position={[3.2, 1.8, -3.2]}>
          <torusGeometry args={[0.6, 0.16, 20, 100]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={2.0}
            metalness={1.0}
            roughness={0.0}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Octaedro izquierdo — acento cálido */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh ref={octa1Ref} position={[-4, -1.8, -2]}>
          <octahedronGeometry args={[0.45]} />
          <meshStandardMaterial
            color="#ff6b9d"
            emissive="#ff6b9d"
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Octaedro pequeño — acento secundario */}
      <Float speed={3.5} rotationIntensity={2.5} floatIntensity={0.6}>
        <mesh ref={octa2Ref} position={[-2.5, 2.5, -4]}>
          <octahedronGeometry args={[0.28]} />
          <meshStandardMaterial
            color="#ffb347"
            emissive="#ffb347"
            emissiveIntensity={1.8}
            metalness={0.8}
            roughness={0.15}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Torus ring grande — fondo, muy sutil */}
      <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh ref={ringRef} position={[1.5, -0.5, -5]}>
          <torusGeometry args={[2.2, 0.04, 8, 120]} />
          <meshStandardMaterial
            color="#7c6fff"
            emissive="#7c6fff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.25}
          />
        </mesh>
      </Float>

      {/* Luces */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 4]}   intensity={3.0} color="#7c6fff" />
      <pointLight position={[-5, -3, 4]} intensity={2.0} color="#00e5ff" />
      <pointLight position={[0, 3, 6]}   intensity={1.0} color="#ffffff" />
    </>
  );
}
