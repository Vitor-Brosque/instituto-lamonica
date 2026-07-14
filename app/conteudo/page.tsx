import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import ArtigoCard from "@/components/artigo-card";
import { artigos } from "@/lib/artigos";

export const metadata: Metadata = {
  title: "Conteúdo educativo · Instituto Lamônica",
  description:
    "Artigos e vídeos do Instituto Lamônica sobre metabolismo, medicação para emagrecimento, equilíbrio hormonal e longevidade.",
  alternates: { canonical: "/conteudo" },
};

export default function ConteudoIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-canvas">
          <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:px-8 lg:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Conteúdo educativo
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ink">
              Artigos e vídeos sobre saúde metabólica
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Conteúdo produzido pelo médico e pela nutricionista do Instituto
              Lamônica — para informar antes da consulta, não para
              substituí-la.
            </p>
          </div>
        </section>
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 lg:py-20">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {artigos.map((artigo) => (
                <ArtigoCard key={artigo.slug} artigo={artigo} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
