"use client";

import { PROJECTS } from "@/data/projects";

export default function ProgressTicks() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 pointer-events-auto">
      {PROJECTS.map((p, i) => (
        <button
          key={p.slug}
          className="w-1 h-6 bg-moonGray/30 hover:bg-saturnGold transition-colors relative group"
          aria-label={p.name}
          onClick={() => {
            const el = document.getElementById(`chapter-${i}`);
            if (el) {
              const rect = el.getBoundingClientRect();
              const absoluteTop = rect.top + window.scrollY;
              // Dwell is around the middle of the 200vh section
              window.scrollTo({ top: absoluteTop + window.innerHeight * 0.5, behavior: "smooth" });
            }
          }}
        >
          <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-deepSpace border border-moonGray/20 text-xs text-stellarWhite opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
            {p.name}
          </span>
        </button>
      ))}
    </div>
  );
}
