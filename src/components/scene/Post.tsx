"use client";

import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useScrollStore } from "@/lib/scrollStore";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Post() {
  const caRef = useRef<any>(null);

  useFrame(() => {
    if (caRef.current) {
      const velocity = useScrollStore.getState().velocity;
      const strength = Math.min(Math.abs(velocity) * 0.05, 0.02);
      caRef.current.offset.set(strength, strength);
    }
  });

  return (
    <EffectComposer>
      <Bloom 
        intensity={0.5} 
        luminanceThreshold={0.85} 
        mipmapBlur 
      />
      <ChromaticAberration
        ref={caRef}
        offset={new THREE.Vector2(0, 0)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
      <Noise opacity={0.06} blendFunction={BlendFunction.OVERLAY} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}
