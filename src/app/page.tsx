import TopLinks from "@/components/TopLinks";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import ProgressTicks from "@/components/ProgressTicks";
import Stack from "@/components/Stack";
import Links from "@/components/Links";
import SceneRoot from "@/components/scene/SceneRoot";
import { PROJECTS } from "@/data/projects";

import GradeBg from "@/components/GradeBg";

export default function Home() {
  return (
    <main className="relative w-full">
      <TopLinks />
      <ProgressTicks />
      
      <GradeBg />

      {/* The 3D Canvas */}
      <SceneRoot />

      <Hero />
      
      {PROJECTS.map((project, i) => (
        <Chapter key={project.slug} project={project} index={i} />
      ))}

      <Stack />
      <Links />
    </main>
  );
}
