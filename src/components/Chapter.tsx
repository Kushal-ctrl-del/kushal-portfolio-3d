"use client";

import { Project } from "@/data/projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Chapter({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0;
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    // Masked reveals for text
    const elements = contentRef.current.children;
    
    gsap.fromTo(elements, 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] z-10 pointer-events-none" id={`chapter-${index}`}>
      <div className="sticky top-0 h-screen w-full flex items-center p-6 md:p-12 lg:p-24">
        <div className={`w-full max-w-2xl pointer-events-auto ${isLeft ? "mr-auto" : "ml-auto text-right"}`}>
          <div ref={contentRef} className="bg-deepSpace/30 backdrop-blur-md p-8 rounded-2xl border border-moonGray/10">
            <p className="text-saturnGold uppercase tracking-widest text-xs font-semibold mb-6">
              {project.kind}
            </p>
            <h2 className="font-display font-light text-[clamp(3.5rem,11vw,13rem)] tracking-[-0.03em] leading-none mb-8 text-stellarWhite">
              {project.name}
            </h2>
            <p className="text-lg md:text-xl text-moonGray leading-relaxed max-w-[44ch] mb-8 inline-block text-left">
              {project.summary}
            </p>
            
            <div className={`flex flex-wrap gap-2 mb-10 ${isLeft ? "" : "justify-end"}`}>
              {project.stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-stellarWhite/5 text-moonGray text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className={`flex items-center gap-6 ${isLeft ? "" : "justify-end"}`}>
              {project.status === "live" && project.links.live ? (
                <a 
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-saturnGold text-deepSpace font-medium rounded-full hover:bg-stellarWhite transition-colors"
                >
                  Open live project
                </a>
              ) : (
                <span className="px-6 py-3 border border-moonGray/30 text-moonGray font-medium rounded-full">
                  In development
                </span>
              )}
              
              <a 
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stellarWhite hover:text-saturnGold transition-colors font-medium underline underline-offset-4"
              >
                View source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
