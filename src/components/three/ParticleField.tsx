"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Seeded PRNG for deterministic particle generation
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generateParticles(count: number) {
  const rand = mulberry32(42);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const primaryColor = new THREE.Color("#6c63ff");
  const secondaryColor = new THREE.Color("#00d4ff");

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const radius = rand() * 8 + 2;
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const t = rand();
    const color = primaryColor.clone().lerp(secondaryColor, t);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  return { positions, colors };
}

interface ParticleFieldProps {
  count?: number;
}

export function ParticleField({ count = 2000 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const [{ positions, colors }] = useState(() => generateParticles(count));

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.04;
    meshRef.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
