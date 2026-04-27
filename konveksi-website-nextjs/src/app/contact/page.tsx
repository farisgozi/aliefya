import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactClient from "./ContactClient";
import { site } from "@/data/site";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi tim Aliefya Konveksi untuk konsultasi, quotation, dan kunjungan studio.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-12">
        <section className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="tag-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-clay animate-blink" />
                Mari ngobrol
              </span>
              <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-tightest text-balance">
                Cerita dulu konsepnya, <span className="italic text-clay">harganya kemudian</span>.
              </h1>
              <p className="mt-6 text-ink/65 text-lg max-w-md">
                Tim sales kami akan diskusi soal bahan, deadline, dan budget sebelum
                kasih quotation final. Tidak ada follow-up agresif — kami percaya
                produk berkualitas berbicara sendiri.
              </p>

              <div className="mt-10 space-y-5">
                <ContactRow label="WhatsApp" value={site.whatsapp} href={site.whatsappLink} accent />
                <ContactRow label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow label="Studio" value={site.studio} />
                <ContactRow label="Jam kerja" value={site.hours} />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactClient />
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 mt-24 md:mt-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-bone">
            <div className="absolute inset-0 opacity-40 grain" />
            <div className="relative grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="tag-pill">Kunjungi studio</span>
                <h3 className="mt-5 font-display text-3xl md:text-4xl tracking-tightest">
                  Datang langsung. <br />
                  <span className="italic text-moss">Lihat tangan</span> yang
                  mengerjakan.
                </h3>
                <p className="mt-4 text-ink/65 max-w-md">
                  Studio kami terbuka untuk reservasi kunjungan setiap hari kerja.
                  Kami senang menunjukkan proses dari kain mentah hingga finishing.
                </p>
                <a
                  href={site.whatsappLink}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream hover:bg-clay transition-colors"
                >
                  Reservasi via WhatsApp →
                </a>
              </div>
              <div className="relative h-[260px] md:h-auto md:min-h-[320px] bg-moss text-cream p-8 flex flex-col justify-end">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                  Lokasi
                </div>
                <div className="mt-2 font-display text-3xl leading-tight">
                  Bandung, Indonesia
                </div>
                <div className="mt-1 text-cream/70 text-sm">{site.studio}</div>

                {/* decorative compass */}
                <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-cream/20 animate-spin-slow">
                  <span className="absolute inset-2 rounded-full border border-cream/15" />
                  <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-clay" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-cream/70">
                    N
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  accent = false,
}: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 border-t border-ink/10 pt-4"
    >
      <div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink/45">
          {label}
        </div>
        <div className={`mt-1 font-display text-xl ${accent ? "text-clay" : ""}`}>
          {value}
        </div>
      </div>
      {href && (
        <span
          aria-hidden
          className="text-ink/40 group-hover:text-clay group-hover:translate-x-0.5 transition-all"
        >
          ↗
        </span>
      )}
    </Comp>
  );
}
