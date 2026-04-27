"use client";

import { useState } from "react";

const productOptions = [
  "Kaos",
  "Hoodie / Crewneck",
  "Kemeja / Polo",
  "Jaket / Outer",
  "Jersey",
  "Seragam",
  "Lainnya",
];

const qtyOptions = ["12 – 50 pcs", "50 – 200 pcs", "200 – 1.000 pcs", "> 1.000 pcs"];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState<string>("Kaos");
  const [qty, setQty] = useState<string>("12 – 50 pcs");

  return (
    <div className="relative">
      <div className="absolute -top-6 -left-3 hidden md:block tag-pill rotate-[-4deg] bg-clay text-cream border-clay">
        <span className="h-1.5 w-1.5 rounded-full bg-cream" />
        Form pemesanan
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="rounded-3xl border border-ink/10 bg-bone p-6 md:p-10 shadow-[0_30px_80px_-30px_rgba(14,20,17,0.18)]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nama lengkap" required>
            <input
              type="text"
              required
              className="input"
              placeholder="cth. Astri Wulandari"
            />
          </Field>
          <Field label="Email / WhatsApp" required>
            <input
              type="text"
              required
              className="input"
              placeholder="email@kamu.com"
            />
          </Field>
          <Field label="Brand / komunitas">
            <input type="text" className="input" placeholder="Nama tim/perusahaan" />
          </Field>
          <Field label="Kota">
            <input type="text" className="input" placeholder="Bandung" />
          </Field>
        </div>

        <div className="mt-8">
          <label className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
            Jenis produk
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {productOptions.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProduct(p)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  product === p
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/15 text-ink/70 hover:border-ink/40"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
            Volume pesanan
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {qtyOptions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setQty(q)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  qty === q
                    ? "bg-clay text-cream border-clay"
                    : "border-ink/15 text-ink/70 hover:border-ink/40"
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Field label="Cerita konsep & deadline">
            <textarea
              rows={5}
              className="input resize-none"
              placeholder="Cth. butuh 80 hoodie untuk launching, deadline 3 minggu, ada referensi mockup."
            />
          </Field>
        </div>

        <div className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-ink/55 max-w-sm">
            Dengan mengirim form, kamu setuju kami menghubungi balik via email/WA
            untuk diskusi lanjutan. Data tidak dibagikan ke pihak ketiga.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream hover:bg-clay transition-colors"
          >
            {submitted ? "Terima kasih ✓" : "Kirim brief"}
            {!submitted && (
              <span
                aria-hidden
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream/15"
              >
                →
              </span>
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(14, 20, 17, 0.12);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          color: #0e1411;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .input::placeholder {
          color: rgba(14, 20, 17, 0.38);
        }
        .input:focus {
          outline: none;
          border-color: #c44a2a;
          background: #f6f1e7;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
  required = false,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
        {label}
        {required && <span className="text-clay"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
