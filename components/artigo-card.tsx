import Link from "next/link";
import Placeholder from "@/components/placeholder";
import type { Artigo } from "@/lib/artigos";

export default function ArtigoCard({ artigo }: { artigo: Artigo }) {
  return (
    <Link
      href={`/conteudo/${artigo.slug}`}
      className="group block overflow-hidden rounded-3xl border border-line bg-canvas"
    >
      <Placeholder
        label={
          artigo.formato === "Vídeo"
            ? "Capa do vídeo (substituir)"
            : "Capa do artigo (substituir)"
        }
        className="aspect-video rounded-none border-x-0 border-t-0"
      />
      <div className="p-6">
        <span className="inline-flex rounded-full bg-brand-tint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          {artigo.formato}
        </span>
        <h3 className="mt-3 font-display text-lg font-medium leading-snug text-ink group-hover:text-brand">
          {artigo.titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {artigo.tema}
        </p>
      </div>
    </Link>
  );
}
