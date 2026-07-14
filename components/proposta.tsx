import SectionHeading from "@/components/section-heading";
import { IconLeaf, IconPlusCircle } from "@/components/icons";

const pilares = [
  {
    icon: IconPlusCircle,
    titulo: "Avaliação médica",
    texto:
      "Investigação clínica do seu quadro: histórico, exames e fatores que influenciam peso, metabolismo e disposição.",
  },
  {
    icon: IconLeaf,
    titulo: "Acompanhamento nutricional",
    texto:
      "Estratégia alimentar individualizada, construída para a sua rotina — e ajustada conforme o corpo responde.",
  },
];

export default function Proposta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="A proposta"
            title="Medicina e nutrição no mesmo plano de cuidado"
            sub="Em vez de consultas isoladas, um casal de profissionais que enxerga o mesmo paciente por dois ângulos complementares — e decide o plano em conjunto."
          />
        </div>
        <div className="space-y-5">
          {pilares.map((pilar) => (
            <div
              key={pilar.titulo}
              className="rounded-3xl border border-line bg-canvas p-7"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-brand">
                <pilar.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">
                {pilar.titulo}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {pilar.texto}
              </p>
            </div>
          ))}
          <p className="px-2 text-sm leading-relaxed text-muted">
            As duas frentes se encontram em um único plano — médico e
            nutricional ao mesmo tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
