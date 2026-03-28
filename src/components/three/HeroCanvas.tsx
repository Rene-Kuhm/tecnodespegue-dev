"use client";

import dynamic from "next/dynamic";
import { Suspense, useSyncExternalStore } from "react";

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

const Effects = dynamic(
  () => import("./Effects").then((mod) => ({ default: mod.Effects })),
  { ssr: false }
);

const subscribe       = () => () => {};
const getIsMobile     = () => window.innerWidth < 768;
const getIsMobileServer = () => false;

export function HeroCanvas() {
  const isMobile = useSyncExternalStore(subscribe, getIsMobile, getIsMobileServer);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{
            antialias: !isMobile,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: 3, // ACESFilmicToneMapping
            toneMappingExposure: 1.2,
          }}
          dpr={[1, isMobile ? 1 : 1.5]}
        >
          <ParticleField count={isMobile ? 700 : 2000} />
          <FloatingGeometry />
          {!isMobile && <Effects />}
        </Canvas>
      </Suspense>
    </div>
  );
}
