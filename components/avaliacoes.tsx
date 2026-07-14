import SectionHeading from "@/components/section-heading";
import Placeholder from "@/components/placeholder";
import { IconStar } from "@/components/icons";

const depoimentosEscritos = [1, 2, 3];
const depoimentosVideo = [1, 2];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Resultados e avaliações"
          title="O que os pacientes dizem"
          sub="Espaço reservado para avaliações e depoimentos reais — em vídeo, por escrito e via Google — publicados com autorização de cada paciente."
        />

        {/* Selo da nota do Google — conectar ao perfil do Google Business quando houver acesso. */}
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-2 rounded-3xl border border-dashed border-brand/30 bg-surface px-8 py-6 text-center">
          <div className="flex items-center gap-1 text-brand" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <IconStar key={n} className="h-5 w-5" />
            ))}
          </div>
          <p className="font-display text-2xl font-medium text-ink">[0,0]</p>
          <p className="text-sm text-muted">
            Nota no Google — conectar ao Google Business do Instituto
          </p>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            [Link — ver todas as avaliações no Google]
          </span>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {depoimentosVideo.map((n) => (
            <Placeholder
              key={n}
              label="Vídeo — depoimento real de paciente (inserir, com autorização)"
              className="aspect-video"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {depoimentosEscritos.map((n) => (
            <figure
              key={n}
              className="flex flex-col rounded-3xl border border-dashed border-brand/30 bg-surface p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-brand/40"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 grow text-[15px] leading-relaxed text-muted">
                [Avaliação real de paciente — inserir depoimento autorizado.]
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-ink">
                [Nome do paciente]
                <span className="block text-xs font-normal uppercase tracking-wider text-muted">
                  [origem — Google / site]
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
