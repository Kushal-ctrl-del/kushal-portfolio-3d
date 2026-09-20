import { SITE } from "@/config/site";

export default function TopLinks() {
  return (
    <nav className="fixed top-0 right-0 p-6 z-40 text-sm font-display tracking-tight flex gap-8">
      <a 
        href={SITE.links.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-saturnGold transition-colors"
      >
        github.com/Kushal-ctrl-del
      </a>
      <a 
        href={SITE.links.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-saturnGold transition-colors"
      >
        linkedin.com/in/kushal-jain-bb10a3336
      </a>
      <a 
        href={`mailto:${SITE.links.email}`}
        className="hover:text-saturnGold transition-colors"
      >
        {SITE.links.email}
      </a>
    </nav>
  );
}
