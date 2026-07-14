import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import CtaButton from "@/components/cta-button";
import Placeholder from "@/components/placeholder";
import { artigos } from "@/lib/artigos";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);
  if (!artigo) return {};
  return {
    title: `${artigo.titulo} · Instituto Lamônica`,
    description: artigo.resumo,
    alternates: { canonical: `/conteudo/${artigo.slug}` },
    openGraph: {
      title: artigo.titulo,
      description: artigo.resumo,
      type: "article",
    },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);
  if (!artigo) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artigo.titulo,
    description: artigo.resumo,
    author: { "@type": "Organization", name: "Instituto Lamônica" },
    publisher: { "@type": "Organization", name: "Instituto Lamônica" },
  };

  return (
    <>
      <Header />
      <main className="bg-canvas">
        <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 lg:py-20">
          <nav aria-label="Trilha de navegação" className="text-sm text-muted">
            <Link href="/" className="hover:text-brand">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/conteudo" className="hover:text-brand">
              Conteúdo
            </Link>
          </nav>

          <span className="mt-6 inline-flex rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            {artigo.formato}
          </span>
          <h1 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight text-ink">
            {artigo.titulo}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {artigo.resumo}
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-brand/30 bg-brand-tint/40 px-5 py-4 text-sm leading-relaxed text-ink-soft">
            Texto-modelo para demonstrar a estrutura do blog. Substituir pelo
            conteúdo final, revisado e assinado pelo médico ou pela
            nutricionista responsável, antes da publicação.
          </div>

          {artigo.videoPlaceholder && (
            <Placeholder
              label="Vídeo — inserir vídeo real (YouTube/Vimeo)"
              className="mt-8 aspect-video w-full"
            />
          )}

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {artigo.corpo.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
            {artigo.lista && (
              <ul className="list-disc space-y-2 pl-5">
                {artigo.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-12 rounded-3xl border border-line bg-surface p-7 text-center">
            <p className="font-display text-xl font-medium text-ink">
              Quer conversar sobre o seu caso?
            </p>
            <p className="mt-2 text-sm text-muted">
              Agende uma avaliação médica e nutricional no Instituto Lamônica.
            </p>
            <div className="mt-5 flex justify-center">
              <CtaButton />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsappButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
