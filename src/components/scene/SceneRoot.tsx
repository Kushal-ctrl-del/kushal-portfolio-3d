"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import HeroCore from "./HeroCore";
import Particles from "./Particles";
import CameraRig from "./CameraRig";
import Artifacts from "./Artifacts";
import Lighting from "./Lighting";
import Post from "./Post";

export default function SceneRoot() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <Canvas
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Lighting />
          <CameraRig />
          <Environment preset="city" />
          <Particles count={800} />
          <HeroCore />
          <Artifacts />
          <Post />
        </Suspense>
      </Canvas>
    </div>
  );
}
