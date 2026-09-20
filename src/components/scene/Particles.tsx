"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/lib/scrollStore";

export default function Particles({ count = 800 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      // Spread them deep along the camera flight path (0 to -120)
      const z = (Math.random() * -130) + 10;
      const scale = Math.random() * 0.5 + 0.5;
      temp.push({ x, y, z, scale });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Stretch based on scroll velocity (simulated via store)
    const velocity = useScrollStore.getState().velocity;
    const stretch = Math.max(1, Math.abs(velocity) * 10);
    
    particles.forEach((particle, i) => {
      dummy.position.set(particle.x, particle.y, particle.z);
      // Scale Z to create streaks when scrolling fast
      dummy.scale.set(particle.scale, particle.scale, particle.scale * stretch);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 4, 4]} />
      <meshBasicMaterial color="#9CA3AF" transparent opacity={0.4} />
    </instancedMesh>
  );
}
