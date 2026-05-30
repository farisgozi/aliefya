import Reveal from "./Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="relative border-y border-ink/10 bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="flex flex-col gap-2 border-t-2 border-ink pt-4"
            >
              <div className="font-display text-5xl md:text-6xl leading-none tracking-tightest text-ink">
                {s.kpi}
                <span className="text-clay">{s.suffix}</span>
              </div>
              <div className="text-sm text-ink/55 max-w-[12rem]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
