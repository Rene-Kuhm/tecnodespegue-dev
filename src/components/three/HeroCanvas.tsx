"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import con ssr: false para WebGL
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
  { ssr: false }
);

const ParticleField = dynamic(
  () => import("./ParticleField").then((mod) => ({ default: mod.ParticleField })),
  { ssr: false }
);

const FloatingGeometry = dynamic(
  () => import("./FloatingGeometry").then((mod) => ({ default: mod.FloatingGeometry })),
  { ssr: false }
);

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.5]}
        >
          <ParticleField count={1800} />
          <FloatingGeometry />
        </Canvas>
      </Suspense>
    </div>
  );
}
