import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { artigos } from "@/lib/artigos";

// Necessário para exportação estática (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginasEstaticas: MetadataRoute.Sitemap = [
    { url: site.dominio, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.dominio}/conteudo`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const paginasDeArtigos: MetadataRoute.Sitemap = artigos.map((artigo) => ({
    url: `${site.dominio}/conteudo/${artigo.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...paginasEstaticas, ...paginasDeArtigos];
}
