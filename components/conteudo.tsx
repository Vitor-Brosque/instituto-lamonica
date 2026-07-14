import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import ArtigoCard from "@/components/artigo-card";
import { artigos } from "@/lib/artigos";

export default function Conteudo() {
  const destaques = artigos.slice(0, 3);
  return (
    <section id="conteudo" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Conteúdo educativo"
          title="Educação em saúde, sem atalhos"
          sub="Artigos e vídeos do médico e da nutricionista sobre metabolismo, medicação, hormônios e longevidade."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {destaques.map((artigo) => (
            <ArtigoCard key={artigo.slug} artigo={artigo} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/conteudo"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            Ver todos os conteúdos →
          </Link>
        </div>
      </div>
    </section>
  );
}
