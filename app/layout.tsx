import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: "Instituto Lamônica · Saúde Integrativa em Bauru",
  description:
    "Medicina e nutrição integradas para emagrecimento, saúde metabólica, longevidade e performance. Agende sua avaliação em Bauru/SP.",
};

// Dados estruturados para busca local — reforça o site em buscas por
// "clínica" / "médico" / "nutricionista" + Bauru.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.nomeCompleto,
  url: site.dominio,
  telephone: site.telefone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.endereco,
    addressLocality: "Bauru",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [site.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
