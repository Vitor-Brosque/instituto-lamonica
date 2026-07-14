import SectionHeading from "@/components/section-heading";
import {
  IconActivity,
  IconDroplet,
  IconHeart,
  IconTrendingUp,
} from "@/components/icons";

const objetivos = [
  {
    icon: IconActivity,
    titulo: "Emagrecimento e saúde metabólica",
    texto:
      "Cuidado médico e nutricional para peso e metabolismo, partindo dos seus exames e da sua rotina real.",
  },
  {
    icon: IconDroplet,
    titulo: "Equilíbrio hormonal",
    texto:
      "Investigação e acompanhamento dos eixos hormonais que influenciam energia, sono e composição corporal.",
  },
  {
    icon: IconHeart,
    titulo: "Longevidade e prevenção",
    texto:
      "Envelhecer na sua melhor versão: prevenção, rastreamento e construção de hábitos para a vida longa.",
  },
  {
    icon: IconTrendingUp,
    titulo: "Performance e composição corporal",
    texto:
      "Estratégia médica e nutricional para treinar melhor, recuperar bem e acompanhar a evolução do corpo.",
  },
];

export default function Objetivos() {
  return (
    <section id="objetivos" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Objetivos do paciente"
          title="Para onde você quer levar a sua saúde"
          sub="Quatro caminhos que costumam trazer pacientes até o Instituto — todos conduzidos pelo mesmo cuidado integrado."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objetivos.map((objetivo) => (
            <div
              key={objetivo.titulo}
              className="rounded-3xl border border-line bg-surface p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-brand">
                <objetivo.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-medium leading-snug text-ink">
                {objetivo.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {objetivo.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
