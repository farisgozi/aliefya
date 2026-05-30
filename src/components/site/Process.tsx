import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section
      id="proses"
      className="relative bg-ink text-cream py-24 md:py-32 grain"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:items-end mb-16">
          <div className="md:col-span-8">
            <SectionHeader
              tone="cream"
              eyebrow="Cara kerja"
              title={
                <>
                  Lima langkah, <span className="italic text-clay">nol drama</span>{" "}
                  produksi.
                </>
              }
              description="Alur kerja kami transparan: setiap tahap punya dokumentasi & PIC. Anda selalu tahu ada di tahap mana pesanan tim Anda."
            />
          </div>
          <div className="md:col-span-4 md:text-right text-cream/60 text-sm">
            <p>
              Estimasi rata-rata 14–21 hari kerja
              <br />
              dari sample disetujui hingga kirim.
            </p>
          </div>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-5 md:gap-3">
          <span
            aria-hidden
            className="hidden md:block absolute top-12 left-6 right-6 h-px bg-cream/15"
          />
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.code}
              delay={i * 100}
              className="relative md:pt-0"
            >
              <div className="relative flex items-center gap-3 mb-4">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 bg-ink text-clay font-display text-lg">
                  {step.code}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="md:hidden block h-px flex-1 bg-cream/10"
                  />
                )}
              </div>
              <h3 className="font-display text-2xl text-cream">{step.name}</h3>
              <p className="mt-2 text-sm text-cream/65 max-w-[18rem]">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
