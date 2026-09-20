"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { useScrollStore } from "@/lib/scrollStore";
import { easing } from "maath";

export default function HeroCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uReveal: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
  }), []);

  useEffect(() => {
    // Intro reveal animation (simulated here, can be tied to GSAP)
    let t = 0;
    const interval = setInterval(() => {
      t += 0.05;
      if (uniforms.uReveal.value < 1) {
        uniforms.uReveal.value = Math.min(1, t);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [uniforms.uReveal]);

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    
    // Inertia on pointer
    const pointer = useScrollStore.getState().pointer;
    if (meshRef.current) {
      easing.dampE(
        meshRef.current.rotation,
        [pointer.y * 0.2, pointer.x * 0.2, uniforms.uTime.value * 0.1],
        0.25,
        delta
      );
    }
  });

  return (
    <group>
      {/* 3D Text behind the core for refraction */}
      <Text
        position={[0, 0, -3]}
        fontSize={3.5}
        letterSpacing={-0.04}
        color="#F8FAFC"
        font="https://fonts.gstatic.com/s/fraunces/v31/6NUu8FxcNwSlXYxtHQ_ITxQJ_75o.woff2"
        anchorX="center"
        anchorY="middle"
      >
        Kushal S
      </Text>

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 32]} />
        <MeshTransmissionMaterial
          ref={materialRef}
          background={new THREE.Color("#0B0F1A")}
          transmission={1}
          roughness={0.1}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.5}
          distortionScale={0.3}
          temporalDistortion={0.1}
          onBeforeCompile={(shader) => {
            shader.uniforms.uTime = uniforms.uTime;
            shader.uniforms.uReveal = uniforms.uReveal;
            
            // Add custom displacement and reveal logic here later
            shader.vertexShader = `
              uniform float uTime;
              ${shader.vertexShader}
            `;
          }}
        />
      </mesh>
      
      {/* Gold Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#F6D9A7" />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.0, 0.005, 16, 100]} />
        <meshBasicMaterial color="#F6D9A7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
