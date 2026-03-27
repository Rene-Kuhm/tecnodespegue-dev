"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.2;
    }

    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = -time * 0.1;
      mesh2Ref.current.rotation.z = time * 0.12;
    }
  });

  return (
    <>
      {/* Esfera principal distorsionada — desplazada a la derecha para no tapar el texto */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={meshRef} position={[4, 0.5, -2]}>
          <icosahedronGeometry args={[1.2, 4]} />
          <MeshDistortMaterial
            color="#6c63ff"
            emissive="#3d37cc"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.5}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Torus secundario */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={mesh2Ref} position={[3, 1.5, -3]}>
          <torusGeometry args={[0.55, 0.18, 16, 100]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00a8cc"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Octaedro decorativo */}
      <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
        <mesh position={[-3.5, -2, -2]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#ff6b6b"
            emissive="#cc3333"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Luces */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#6c63ff" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[0, 0, 8]} intensity={1} color="#ffffff" />
    </>
  );
}
