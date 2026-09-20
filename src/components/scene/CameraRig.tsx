"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useScrollStore } from "@/lib/scrollStore";
import { CAMERA_PATH_POINTS, CHAPTERS } from "@/data/chapters";

export default function CameraRig() {
  const { camera } = useThree();
  
  const spline = useMemo(() => new THREE.CatmullRomCurve3(CAMERA_PATH_POINTS, false), []);
  
  // Create a lookAt target point that lags slightly or leads
  const lookAtTarget = useMemo(() => new THREE.Vector3(), []);
  
  useFrame(() => {
    const { progress, velocity } = useScrollStore.getState();
    
    // Evaluate position along spline
    const pos = spline.getPointAt(Math.min(progress, 0.999));
    
    // The target point slightly ahead on the path
    const target = spline.getPointAt(Math.min(progress + 0.05, 0.999));
    
    camera.position.lerp(pos, 0.1);
    
    // Look ahead
    lookAtTarget.lerp(target, 0.1);
    camera.lookAt(lookAtTarget);

    // Roll towards turn direction
    // A simple approximation: compare current x to target x
    const turn = (target.x - pos.x) * 0.5;
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, -turn * 0.2, 0.1);

    // FOV punch based on velocity
    const baseFov = 45;
    const maxFov = 62;
    const speed = Math.abs(velocity);
    const targetFov = baseFov + speed * (maxFov - baseFov);
    
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.1);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
