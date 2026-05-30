import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { capabilities } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Capabilities() {
  return (
    <section id="produk" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-12 md:items-end mb-12">
          <div className="md:col-span-8">
            <SectionHeader
              eyebrow="Yang kami kerjakan"
              title={
                <>
                  Enam jenis produk,{" "}
                  <span className="italic text-moss">satu standar</span>{" "}
                  presisi.
                </>
              }
              description="Setiap kategori punya tim pemotongan, jahit, dan finishing tersendiri — supaya tidak ada batch yang dikerjakan setengah hati."
            />
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              Lihat semua kategori
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[14rem] gap-3 md:gap-4">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.code}
              delay={i * 60}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-ink/10 bg-bone p-6 transition-colors hover:bg-ink hover:text-cream",
                cap.span,
              )}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/45 group-hover:text-cream/50">
                    {cap.code}
                  </span>
                  <span className="font-display text-5xl leading-none num-outline text-ink/15 group-hover:text-clay/70">
                    {cap.code}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">
                    {cap.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 group-hover:text-cream/70 max-w-md">
                    {cap.blurb}
                  </p>
                  <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                    <div>
                      <dt className="uppercase tracking-[0.18em] text-ink/40 group-hover:text-cream/45">
                        Bahan
                      </dt>
                      <dd className="mt-0.5 font-medium">{cap.bahan}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.18em] text-ink/40 group-hover:text-cream/45">
                        Min. Order
                      </dt>
                      <dd className="mt-0.5 font-medium">{cap.minOrder}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-clay/10 blur-2xl group-hover:bg-clay/30"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
