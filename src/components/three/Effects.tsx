"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.9}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        mipmapBlur
        blendFunction={BlendFunction.ADD}
      />
    </EffectComposer>
  );
}
