"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScrollStore } from "@/lib/scrollStore";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
      useScrollStore.getState().setProgress(e.progress);
      useScrollStore.getState().setVelocity(e.velocity);
      
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      
      let chapter = 0;
      if (scrollY >= vh * 0.5 && scrollY < vh * 15) {
        // First chapter starts around 100vh, center is at 200vh.
        chapter = Math.floor((scrollY + vh * 0.5) / (vh * 2));
        chapter = Math.max(1, Math.min(chapter, 7));
      } else if (scrollY >= vh * 15) {
        chapter = 8;
      }
      
      if (useScrollStore.getState().activeChapter !== chapter) {
        useScrollStore.getState().setActiveChapter(chapter);
      }
    });

    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      useScrollStore.getState().setPointer(x, y);
    };
    window.addEventListener("pointermove", handlePointerMove);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <>{children}</>;
}
