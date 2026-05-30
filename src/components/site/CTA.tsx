import Link from "next/link";
import { site } from "@/data/site";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-moss text-cream p-8 md:p-16 grain">
          {/* sun arc */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-clay/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-8 right-10 h-24 w-24 rounded-full border border-cream/20 animate-spin-slow"
          >
            <span className="absolute inset-2 rounded-full border border-cream/15" />
            <span className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-clay" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="tag-pill border-cream/25 bg-transparent text-cream/70">
                Punya konsep di kepala?
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance">
                Mari bikin <span className="italic text-clay">koleksi</span><br />
                pertama tim Anda.
              </h2>
            </div>
            <div className="md:col-span-4 space-y-4">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-between gap-3 rounded-2xl bg-clay px-6 py-4 text-base font-medium text-cream hover:bg-cream hover:text-ink transition-colors"
              >
                Mulai konsultasi gratis
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-cream group-hover:bg-ink group-hover:text-cream transition-colors">
                  →
                </span>
              </Link>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-between gap-3 rounded-2xl border border-cream/25 px-6 py-4 text-sm font-medium text-cream/85 hover:border-cream hover:text-cream transition-colors"
              >
                WhatsApp · {site.whatsapp}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
