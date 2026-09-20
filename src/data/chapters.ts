import { PROJECTS } from "./projects";
import * as THREE from "three";

export type ChapterConfig = {
  project: typeof PROJECTS[number];
  keyLight: string;
  rimLight: string;
  bgTint: string;
};

export const CHAPTERS: ChapterConfig[] = [
  { project: PROJECTS[0], keyLight: "#F6D9A7", rimLight: "#6D5BFF", bgTint: "#0B0F1A" },
  { project: PROJECTS[1], keyLight: "#7DD3FC", rimLight: "#F8FAFC", bgTint: "#0A1220" },
  { project: PROJECTS[2], keyLight: "#F472B6", rimLight: "#6D5BFF", bgTint: "#120B1A" },
  { project: PROJECTS[3], keyLight: "#4FD1C5", rimLight: "#F6D9A7", bgTint: "#0A1517" },
  { project: PROJECTS[4], keyLight: "#F8FAFC", rimLight: "#F6D9A7", bgTint: "#0F0F14" },
  { project: PROJECTS[5], keyLight: "#6D5BFF", rimLight: "#7DD3FC", bgTint: "#0C0D1F" },
  { project: PROJECTS[6], keyLight: "#F6D9A7", rimLight: "#F472B6", bgTint: "#140E0C" },
];

export const CAMERA_PATH_POINTS = [
  new THREE.Vector3(0, 0, 0),        // Hero
  new THREE.Vector3(2.4, 0, -14),    // Ch 1
  new THREE.Vector3(-2.4, 0, -28),   // Ch 2
  new THREE.Vector3(2.4, 0, -42),    // Ch 3
  new THREE.Vector3(-2.4, 0, -56),   // Ch 4
  new THREE.Vector3(2.4, 0, -70),    // Ch 5
  new THREE.Vector3(-2.4, 0, -84),   // Ch 6
  new THREE.Vector3(2.4, 0, -98),    // Ch 7
  new THREE.Vector3(0, 10, -120),    // Finale (pull back up and over)
];
