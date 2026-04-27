import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="klien" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Apa kata mereka"
          title={
            <>
              Dipercaya tim yang serius soal{" "}
              <span className="italic text-clay">detail</span>.
            </>
          }
          description="Dari komunitas lari subuh hingga lembaga keuangan — kami diundang kembali karena konsistensi."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className="relative flex flex-col rounded-3xl border border-ink/10 bg-bone p-7 hover:bg-ink hover:text-cream transition-colors group"
            >
              <span
                aria-hidden
                className="font-display text-7xl leading-none text-clay/60 mb-2"
              >
                &ldquo;
              </span>
              <p className="text-base md:text-[17px] leading-relaxed text-ink/80 group-hover:text-cream/85 flex-1">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-ink/10 pt-4 group-hover:border-cream/15">
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink/45 group-hover:text-cream/55">
                  {t.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
