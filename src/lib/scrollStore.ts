import { create } from "zustand";

interface ScrollState {
  progress: number;
  velocity: number;
  activeChapter: number;
  pointer: { x: number; y: number };
  setProgress: (p: number) => void;
  setVelocity: (v: number) => void;
  setActiveChapter: (c: number) => void;
  setPointer: (x: number, y: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  velocity: 0,
  activeChapter: 0,
  pointer: { x: 0, y: 0 },
  setProgress: (progress) => set({ progress }),
  setVelocity: (velocity) => set({ velocity }),
  setActiveChapter: (activeChapter) => set({ activeChapter }),
  setPointer: (x, y) => set({ pointer: { x, y } }),
}));
