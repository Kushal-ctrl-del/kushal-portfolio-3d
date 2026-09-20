import { SITE } from "@/config/site";

export default function Links() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center items-center z-10 pointer-events-none px-6">
      <div className="flex flex-col items-center gap-8 pointer-events-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-moonGray mb-8">Get in touch</h2>
        <a 
          href={SITE.links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-display text-5xl md:text-7xl lg:text-8xl text-stellarWhite hover:text-saturnGold transition-colors"
        >
          github
        </a>
        <a 
          href={SITE.links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-display text-5xl md:text-7xl lg:text-8xl text-stellarWhite hover:text-saturnGold transition-colors"
        >
          linkedin
        </a>
        <a 
          href={`mailto:${SITE.links.email}`} 
          className="font-display text-5xl md:text-7xl lg:text-8xl text-stellarWhite hover:text-saturnGold transition-colors"
        >
          email
        </a>
      </div>
    </section>
  );
}
