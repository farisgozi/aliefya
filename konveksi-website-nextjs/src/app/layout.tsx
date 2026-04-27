import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aliefya.id"),
  title: {
    default: "Aliefya Konveksi — Custom apparel, made in Indonesia.",
    template: "%s · Aliefya Konveksi",
  },
  description:
    "Konveksi custom skala kecil hingga produksi besar. Kaos, hoodie, jaket, kemeja, polo, jersey, dan seragam — dijahit dengan presisi, dikerjakan dengan hati.",
  keywords: [
    "konveksi",
    "konveksi bandung",
    "kaos custom",
    "hoodie custom",
    "seragam kantor",
    "jersey printing",
    "merchandise komunitas",
    "Aliefya",
  ],
  openGraph: {
    title: "Aliefya Konveksi — Custom apparel, made in Indonesia.",
    description:
      "Konveksi custom dengan presisi dan kehangatan kerajinan tangan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
