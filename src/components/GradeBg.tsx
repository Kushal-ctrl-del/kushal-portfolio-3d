"use client";

import { useScrollStore } from "@/lib/scrollStore";
import { CHAPTERS } from "@/data/chapters";

export default function GradeBg() {
  const activeChapter = useScrollStore(s => s.activeChapter);
  // activeChapter 0 is hero (deepSpace #0B0F1A), 1-7 are projects, 8 is finale
  const bg = activeChapter > 0 && activeChapter <= CHAPTERS.length 
    ? CHAPTERS[activeChapter - 1].bgTint 
    : "#0B0F1A";
    
  return (
    <div 
      className="fixed inset-0 -z-50 transition-colors duration-1000" 
      style={{ backgroundColor: bg }} 
    />
  );
}
