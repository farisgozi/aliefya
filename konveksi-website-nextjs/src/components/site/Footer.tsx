import Link from "next/link";
import Marquee from "./Marquee";
import NewsletterForm from "./NewsletterForm";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-10 grain">
      {/* big wordmark */}
      <div className="overflow-hidden border-b border-cream/10 pb-12">
        <Marquee
          items={["Aliefya", "Konveksi", "Custom", "Apparel", "Bekasi"]}
          className="font-display text-[18vw] leading-none tracking-tightest text-cream/10"
          separator="-"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-3xl tracking-tightest">
            Aliefya<span className="text-clay">.</span>
          </div>
          <p className="mt-4 max-w-sm text-cream/65">
            Studio konveksi yang menggabungkan ketelitian penjahit kawakan dengan
            ritme produksi modern. Sejak {site.established}.
          </p>

          <div className="mt-8 space-y-2 text-sm text-cream/75">
            <div>{site.studio}</div>
            <div>{site.hours}</div>
            <a
              href={site.whatsappLink}
              className="inline-flex items-center gap-2 text-clay hover:text-cream transition-colors"
            >
              {site.whatsapp} <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.22em] text-cream/45 mb-4">
            Jelajah
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Beranda", href: "/" },
              { label: "Produk", href: "/products" },
              { label: "Proses", href: "/#proses" },
              { label: "Klien", href: "/#klien" },
              { label: "Kontak", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream/80 hover:text-clay transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.22em] text-cream/45 mb-4">
            Newsletter
          </h4>
          <p className="text-sm text-cream/65 mb-4">
            Cerita dari studio, tips bahan, & promo bulanan. Tanpa spam.
          </p>
          <NewsletterForm />
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/55">
            {["Instagram", "TikTok", "Tokopedia", "Shopee"].map((s) => (
              <a
                key={s}
                href="#"
                className="hover:text-clay transition-colors"
              >
                {s} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 mt-14 flex flex-col md:flex-row justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/45">
        <div>© {new Date().getFullYear()} Aliefya Konveksi. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cream">Kebijakan Privasi</a>
          <a href="#" className="hover:text-cream">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}

// (default export only)
