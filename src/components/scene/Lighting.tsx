"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useScrollStore } from "@/lib/scrollStore";
import { CHAPTERS } from "@/data/chapters";

export default function Lighting() {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.DirectionalLight>(null);
  
  const targetKey = useMemo(() => new THREE.Color(), []);
  const targetRim = useMemo(() => new THREE.Color(), []);
  
  useFrame(() => {
    const activeChapter = useScrollStore.getState().activeChapter;
    
    if (activeChapter > 0 && activeChapter <= CHAPTERS.length) {
      const config = CHAPTERS[activeChapter - 1];
      targetKey.set(config.keyLight);
      targetRim.set(config.rimLight);
    } else {
      // Hero lighting
      targetKey.set("#F8FAFC");
      targetRim.set("#6D5BFF");
    }
    
    if (keyLightRef.current && rimLightRef.current) {
      keyLightRef.current.color.lerp(targetKey, 0.05);
      rimLightRef.current.color.lerp(targetRim, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight ref={keyLightRef} position={[5, 5, 5]} intensity={2} />
      <directionalLight ref={rimLightRef} position={[-5, 5, -5]} intensity={2} />
    </>
  );
}
