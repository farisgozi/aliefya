import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import Reveal from "@/components/site/Reveal";
import { capabilities } from "@/data/site";

type Catalog = {
  category: string;
  blurb: string;
  items: { name: string; bahan: string; price: string }[];
};

const catalog: Catalog[] = [
  {
    category: "Kaos",
    blurb: "Kaos polos, raglan, dan sablon custom. Bahan terkurasi.",
    items: [
      { name: "Kaos Cotton Combed 30s", bahan: "Cotton Combed 30s · 160 gsm", price: "58.000" },
      { name: "Kaos Cotton Combed 24s", bahan: "Cotton Combed 24s · 180 gsm", price: "65.000" },
      { name: "Kaos Bamboo Cotton", bahan: "Bamboo Cotton · 175 gsm", price: "78.000" },
      { name: "Kaos Raglan", bahan: "CVC 220 gsm two-tone", price: "72.000" },
    ],
  },
  {
    category: "Hoodie & Crewneck",
    blurb: "Fleece premium, jahitan rangkap, drawcord matching warna.",
    items: [
      { name: "Hoodie Fleece CVC 320gsm", bahan: "CVC Fleece · 320 gsm", price: "168.000" },
      { name: "Crewneck Cotton Fleece", bahan: "Cotton Fleece · 280 gsm", price: "152.000" },
      { name: "Zipper Hoodie Premium", bahan: "Fleece + YKK Zipper", price: "192.000" },
    ],
  },
  {
    category: "Kemeja & Polo",
    blurb: "Drill, oxford, lacoste pique. Bordir presisi 1–12 warna.",
    items: [
      { name: "Polo Lacoste Pique CVC", bahan: "Lacoste CVC · 200 gsm", price: "92.000" },
      { name: "Kemeja Oxford Premium", bahan: "Oxford Cotton · 130 gsm", price: "138.000" },
      { name: "Kemeja Drill American", bahan: "American Drill · 220 gsm", price: "145.000" },
    ],
  },
  {
    category: "Jaket & Outer",
    blurb: "Bomber, varsity, taslan. Lining flanel, resleting YKK.",
    items: [
      { name: "Jaket Bomber Taslan", bahan: "Taslan Salur · Flanel Lining", price: "215.000" },
      { name: "Varsity Jacket", bahan: "Fleece + Faux Leather Sleeve", price: "248.000" },
      { name: "Coach Jacket Parasut", bahan: "Parasut Despo · Anti Air", price: "178.000" },
    ],
  },
  {
    category: "Jersey",
    blurb: "Sublimasi printing full-color untuk klub & komunitas.",
    items: [
      { name: "Jersey Dryfit Paragon", bahan: "Dryfit Paragon · Sublimasi", price: "98.000" },
      { name: "Jersey Serena", bahan: "Serena · Sublimasi", price: "85.000" },
    ],
  },
  {
    category: "Seragam",
    blurb: "PDH, PDL, wearpack, korporat — produksi konsisten skala besar.",
    items: [
      { name: "Seragam PDH/PDL", bahan: "American Drill · 220 gsm", price: "165.000" },
      { name: "Wearpack Industri", bahan: "Nagata Drill · 240 gsm", price: "245.000" },
      { name: "Seragam Sekolah", bahan: "Tropical · 180 gsm", price: "120.000" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-12">
        <section className="relative mx-auto max-w-6xl px-4 mb-16 md:mb-24">
          <span className="tag-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Katalog produk
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tightest text-balance max-w-3xl">
            Setiap helai punya{" "}
            <span className="italic text-moss">cerita</span>{" "}
            di balik jahitannya.
          </h1>
          <p className="mt-6 max-w-xl text-ink/65 text-lg">
            Harga indikatif per pcs untuk minimum order. Final price disesuaikan
            dengan kompleksitas desain, gramasi, dan teknik finishing yang dipilih.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4">
          <div className="grid gap-3 md:grid-cols-3 mb-12 md:mb-20">
            {capabilities.map((c) => (
              <a
                key={c.code}
                href={`#${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-cream px-5 py-4 hover:border-ink/30 transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
                    {c.code} · {c.bahan.split(",")[0]}
                  </div>
                  <div className="font-display text-xl mt-0.5">{c.name}</div>
                </div>
                <span className="text-clay group-hover:translate-x-0.5 transition-transform" aria-hidden>
                  ↓
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 space-y-20 md:space-y-28">
          {catalog.map((group) => (
            <Reveal
              as="section"
              key={group.category}
              id={group.category.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className="grid gap-8 md:grid-cols-12 mb-8 items-end">
                <div className="md:col-span-7">
                  <h2 className="font-display text-4xl md:text-5xl tracking-tightest text-balance">
                    {group.category}
                  </h2>
                  <p className="mt-3 text-ink/65 max-w-xl">{group.blurb}</p>
                </div>
                <div className="md:col-span-5 md:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-clay underline-offset-4 hover:underline"
                  >
                    Tanyakan teknik & finishing
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.items.map((it, i) => (
                  <article
                    key={it.name}
                    className="group relative flex flex-col justify-between rounded-2xl border border-ink/10 bg-bone p-6 min-h-[220px] hover:bg-ink hover:text-cream transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 group-hover:text-cream/55">
                        {String(i + 1).padStart(2, "0")} · {group.category}
                      </span>
                      <span className="h-6 w-6 rounded-full border border-ink/20 group-hover:border-cream/30 group-hover:bg-clay transition-all" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight mt-8">
                        {it.name}
                      </h3>
                      <p className="mt-2 text-xs text-ink/55 group-hover:text-cream/60">
                        {it.bahan}
                      </p>
                      <div className="mt-5 flex items-end justify-between">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40 group-hover:text-cream/50">
                            Mulai
                          </div>
                          <div className="font-display text-2xl">
                            Rp {it.price}
                            <span className="text-sm text-ink/45 group-hover:text-cream/55">
                              /pcs
                            </span>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium hover:border-clay hover:text-clay group-hover:border-cream/30 group-hover:text-cream group-hover:hover:bg-clay group-hover:hover:border-clay transition-colors"
                        >
                          Pesan →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
