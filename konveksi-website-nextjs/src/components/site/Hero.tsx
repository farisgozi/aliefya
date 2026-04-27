import Link from "next/link";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      {/* decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0E1411 1px, transparent 1px), linear-gradient(to bottom, #0E1411 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* sun arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-12%] h-[480px] w-[480px] rounded-full bg-gradient-to-br from-clay/40 via-rust/20 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="tag-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-clay animate-blink" />
                Studio konveksi · Sejak 2017
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-tightest text-ink">
                Pakaian custom <br />
                <span className="italic font-medium text-moss">yang dijahit</span>{" "}
                <span className="squiggle">selayaknya</span>{" "}
                <em className="not-italic font-black text-clay">karya</em>.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-pretty text-lg text-ink/70 md:text-xl">
                Aliefya Konveksi mengerjakan kaos, hoodie, jaket, kemeja,
                jersey, dan seragam — dari satu komunitas kecil hingga
                produksi 10.000 helai. Bahan terkurasi, jahitan rapih,
                tanggal kirim yang tidak mundur.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream hover:bg-clay transition-colors"
                >
                  Minta penawaran
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-5 py-3 text-sm font-medium text-ink hover:border-ink/40 transition-colors"
                >
                  Lihat katalog
                </Link>
                <div className="hidden md:flex items-center gap-3 pl-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                  <span className="h-px w-8 bg-ink/20" />
                  Free quotation 1×24 jam
                </div>
              </div>
            </Reveal>
          </div>

          {/* spec card */}
          <Reveal delay={350} className="lg:col-span-4">
            <div className="relative rotate-[-1.5deg] rounded-3xl border border-ink/10 bg-bone/70 p-6 shadow-[0_30px_80px_-30px_rgba(14,20,17,0.25)]">
              <div className="absolute -top-3 left-6 rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream">
                Spec sheet · 24/30s
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-ink/50">
                Ref. AL-2026-04
              </div>
              <h3 className="mt-3 font-display text-3xl leading-tight">
                Cotton Combed{" "}
                <span className="text-clay">30s</span>
              </h3>
              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <Spec label="Gramasi" value="180 gsm" />
                <Spec label="Warna" value="22 stok" />
                <Spec label="Sablon" value="Plastisol / DTF" />
                <Spec label="Min. order" value="12 pcs" />
                <Spec label="Lead time" value="14 hari" />
                <Spec label="Garansi" value="Repair gratis" />
              </dl>
              <div className="mt-6 flex items-end justify-between border-t border-ink/10 pt-4">
                <div className="text-xs text-ink/50">
                  Harga mulai
                  <div className="font-display text-2xl text-ink">
                    Rp 58<span className="text-clay">.000</span>
                    <span className="text-sm text-ink/50">/pcs</span>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-clay/15 blur-md" />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-clay text-cream font-display text-lg">
                    ✶
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-20 border-y border-ink/10 bg-cream py-5 font-display text-3xl md:text-4xl">
        <Marquee
          items={[
            "Komunitas",
            "Korporat",
            "Sekolah & Kampus",
            "Sport Club",
            "Distro & Brand",
            "Event",
            "UMKM",
            "Tour & Merchandise",
          ]}
        />
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/45">
        {label}
      </dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}
