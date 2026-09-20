"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CAMERA_PATH_POINTS, CHAPTERS } from "@/data/chapters";

function ThreeArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });
  return (
    <group ref={ref} scale={1.5}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial transmission={1} roughness={0.1} color="#ffffff" ior={1.5} />
      </mesh>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.3, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, Math.PI / 6]}>
        <torusGeometry args={[1.4, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function ElunoArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y = Math.sin(_.clock.elapsedTime) * 0.2;
  });
  return (
    <group ref={ref} scale={1.5}>
      <mesh position={[-0.6, 0, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 50]} />
        <meshPhysicalMaterial transmission={1} roughness={0.1} color={color} ior={1.5} />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <torusGeometry args={[0.5, 0.1, 16, 50]} />
        <meshPhysicalMaterial transmission={1} roughness={0.1} color={color} ior={1.5} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function PanelArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.2;
  });
  return (
    <group ref={ref} scale={1.2}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.5} />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 1.2, 0.5, Math.sin(angle) * 1.2]}>
            <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
            <meshPhysicalMaterial transmission={0.9} roughness={0.2} color={color} />
          </mesh>
        );
      })}
    </group>
  );
}

function LensArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.children.forEach((c, i) => {
        c.scale.y = 1 + Math.sin(_.clock.elapsedTime * 2 + i) * 0.5;
      });
    }
  });
  return (
    <group ref={ref} scale={0.8} position={[-1.5, -1, 0]}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <mesh key={i} position={[i * 0.5, 1, 0]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshPhysicalMaterial transmission={0.9} roughness={0.1} color={color} />
        </mesh>
      ))}
    </group>
  );
}

function ResumeArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.position.y = Math.sin(_.clock.elapsedTime) * 0.1;
  });
  return (
    <group ref={ref} scale={1.5}>
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, 1 - i * 0.5, 0]}>
          <boxGeometry args={[1.6, 0.1, 0.1]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

function ComradeArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(_.clock.elapsedTime) * 0.1;
    }
  });
  return (
    <group ref={ref} scale={1.2}>
      <mesh position={[-0.5, 0.5, 0.5]}>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <meshPhysicalMaterial transmission={0.9} roughness={0.1} color={color} />
      </mesh>
      <mesh position={[0.5, -0.5, -0.5]}>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <meshPhysicalMaterial transmission={0.9} roughness={0.1} color="#ffffff" />
      </mesh>
      {[0, 1, 2].map(i => (
        <mesh key={i} position={[-1 + i * 0.5, 0.5, 0.7]}>
          <sphereGeometry args={[0.1]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

function SoleArtifact({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <group ref={ref} scale={1.5}>
      <mesh>
        <capsuleGeometry args={[0.5, 1.5, 16, 32]} />
        <meshPhysicalMaterial transmission={1} roughness={0.3} color={color} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[1.2, 0.2, 2.8]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function Artifacts() {
  return (
    <group>
      {CHAPTERS.map((chapter, i) => {
        const station = CAMERA_PATH_POINTS[i + 1];
        const xOffset = i % 2 === 0 ? 3 : -3;
        
        return (
          <group key={chapter.project.slug} position={[station.x + xOffset, station.y, station.z - 6]}>
            {i === 0 && <ThreeArtifact color={chapter.keyLight} />}
            {i === 1 && <ElunoArtifact color={chapter.keyLight} />}
            {i === 2 && <PanelArtifact color={chapter.keyLight} />}
            {i === 3 && <LensArtifact color={chapter.keyLight} />}
            {i === 4 && <ResumeArtifact color={chapter.keyLight} />}
            {i === 5 && <ComradeArtifact color={chapter.keyLight} />}
            {i === 6 && <SoleArtifact color={chapter.keyLight} />}
          </group>
        );
      })}
    </group>
  );
}
