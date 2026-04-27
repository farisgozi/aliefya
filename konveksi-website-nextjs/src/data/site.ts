export const site = {
  name: "Aliefya Konveksi",
  short: "Aliefya",
  tagline: "Konveksi custom · Made in Indonesia",
  whatsapp: "+6281234567890",
  whatsappLink: "https://wa.me/6281234567890",
  email: "halo@aliefya.id",
  studio: "Jl. Pasirkoja No. 12, Bandung 40231",
  hours: "Senin – Sabtu · 09.00 – 17.00 WIB",
  established: 2017,
};

export const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/products" },
  { label: "Proses", href: "/#proses" },
  { label: "Klien", href: "/#klien" },
  { label: "Kontak", href: "/contact" },
];

export type Capability = {
  code: string;
  name: string;
  blurb: string;
  bahan: string;
  minOrder: string;
  span?: string;
};

export const capabilities: Capability[] = [
  {
    code: "01",
    name: "Kaos Custom",
    blurb:
      "Cotton combed 24s/30s, sablon plastisol, rubber, DTF — tahan cuci, warna pekat.",
    bahan: "Cotton Combed 24s, 30s, Bamboo",
    minOrder: "12 pcs",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    code: "02",
    name: "Hoodie & Crewneck",
    blurb: "Fleece premium 320 gsm, jahitan rangkap, hoodie cord matching.",
    bahan: "Fleece CVC 320gsm, French Terry",
    minOrder: "24 pcs",
  },
  {
    code: "03",
    name: "Kemeja & Polo",
    blurb: "Drill, oxford, lacoste pique. Bordir komputer presisi 1–12 warna.",
    bahan: "Drill, Oxford, Lacoste CVC",
    minOrder: "12 pcs",
  },
  {
    code: "04",
    name: "Jaket & Outer",
    blurb:
      "Bomber, varsity, parasut, taslan. Lining flanel, resleting YKK kelas A.",
    bahan: "Taslan, Parasut, Fleece",
    minOrder: "12 pcs",
  },
  {
    code: "05",
    name: "Jersey Print",
    blurb: "Sublimasi printing full-color, dryfit ringan untuk komunitas & klub.",
    bahan: "Drifit Paragon, Serena",
    minOrder: "11 pcs",
  },
  {
    code: "06",
    name: "Seragam Kerja",
    blurb: "PDH, PDL, wearpack, korporat. Standar produksi konsisten skala besar.",
    bahan: "American Drill, Tropical, Nagata",
    minOrder: "24 pcs",
  },
];

export const stats = [
  { kpi: "8", suffix: "th", label: "Tahun pengalaman" },
  { kpi: "1.4", suffix: "jt+", label: "Helai diproduksi" },
  { kpi: "640", suffix: "+", label: "Brand & komunitas" },
  { kpi: "98", suffix: "%", label: "Tepat waktu kirim" },
];

export const processSteps = [
  {
    code: "01",
    name: "Konsultasi",
    desc: "Diskusi konsep, anggaran, deadline. Free quotation dalam 1×24 jam.",
  },
  {
    code: "02",
    name: "Desain & Mockup",
    desc: "Mockup digital + revisi tanpa batas hingga sesuai visi tim.",
  },
  {
    code: "03",
    name: "Sample Approval",
    desc: "Sample fisik dikirim. Cek bahan, ukuran, warna sebelum lanjut produksi.",
  },
  {
    code: "04",
    name: "Produksi",
    desc: "Cutting, sewing, finishing. Diawasi tim QC tiap stasiun kerja.",
  },
  {
    code: "05",
    name: "QC & Pengiriman",
    desc: "Quality check, packing rapi, kirim ke seluruh Indonesia.",
  },
];

export const testimonials = [
  {
    quote:
      "Hoodie komunitas kami selesai 3 hari lebih cepat dari deadline. Detail jahitan & sablon rapi banget — sudah 4x repeat order.",
    name: "Galih Pratama",
    role: "Founder, Lokalrun Bandung",
  },
  {
    quote:
      "Kami pesan 1.200 polo seragam untuk training nasional. Aliefya konsisten dari batch pertama sampai terakhir, tidak ada warna yang lari.",
    name: "Astri Wulandari",
    role: "HR Lead, BPR Mitra Niaga",
  },
  {
    quote:
      "Tim mereka kasih saran bahan & gramasi yang lebih awet untuk merchandise tour. Hasilnya: 0 retur dari 800 unit.",
    name: "Rio Nugroho",
    role: "Tour Manager, Senandung Sore",
  },
];

export const faqs = [
  {
    q: "Berapa minimum order?",
    a: "Mulai dari 12 pcs untuk kaos, kemeja, jaket; 24 pcs untuk hoodie & seragam korporat. Untuk jersey sublim minimal 11 pcs.",
  },
  {
    q: "Berapa lama waktu produksi?",
    a: "Rata-rata 14–21 hari kerja setelah sample disetujui. Untuk pesanan urgent kami sediakan opsi express 7–10 hari.",
  },
  {
    q: "Bisa kirim ke luar kota?",
    a: "Bisa. Kami kirim seluruh Indonesia via JNE, J&T, SiCepat, dan kargo darat untuk volume besar.",
  },
  {
    q: "Apakah sample berbayar?",
    a: "Mockup digital gratis. Sample fisik dikenakan biaya bahan + ongkir, dan dipotong dari total invoice saat lanjut produksi.",
  },
  {
    q: "Metode pembayaran?",
    a: "DP 50% di awal, pelunasan setelah QC dan sebelum pengiriman. Transfer bank, QRIS, dan invoice korporat tersedia.",
  },
];

export const clients = [
  "Lokalrun",
  "BPR Mitra Niaga",
  "Senandung Sore",
  "Kopi Tubruk",
  "SMA Insan Cendekia",
  "Universitas Padjadjaran",
  "Komunitas Lari Bandung",
  "Distro Hijrah",
  "PT Sinar Pratama",
  "Indofood Foundation",
];
