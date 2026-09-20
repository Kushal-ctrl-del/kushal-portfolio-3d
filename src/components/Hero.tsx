import { SITE } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center p-6 z-10 pointer-events-none">
      <h1 className="sr-only">
        {SITE.name}
      </h1>
      
      <div className="mt-auto mb-12 max-w-[44ch] pointer-events-auto">
        <p className="text-xl md:text-2xl font-medium mb-4">{SITE.role}</p>
        <p className="text-lg md:text-xl text-moonGray leading-relaxed">{SITE.statement}</p>
      </div>
    </section>
  );
}
