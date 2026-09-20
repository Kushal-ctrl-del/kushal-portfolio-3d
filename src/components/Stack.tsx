import { STACK } from "@/data/stack";

export default function Stack() {
  return (
    <section className="relative w-full min-h-[160vh] z-10 flex flex-col justify-center px-6 py-24 md:px-12 pointer-events-none">
      <div className="max-w-6xl w-full mx-auto pointer-events-auto">
        <div className="space-y-16 md:space-y-24">
          {STACK.map((group) => (
            <div key={group.group} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-moonGray/20 pt-8">
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-saturnGold">
                {group.group}
              </h3>
              <div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-4 items-center">
                {group.items.map(item => (
                  <span key={item} className="text-xl md:text-2xl text-stellarWhite font-light">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
