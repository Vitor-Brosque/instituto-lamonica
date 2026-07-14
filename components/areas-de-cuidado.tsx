import SectionHeading from "@/components/section-heading";

// Conteúdo provisório — ajustar às áreas reais de atuação do Instituto.
const areas = [
  {
    titulo: "Emagrecimento",
    texto:
      "Abordagem médica e nutricional para o processo de emagrecimento, com segurança e acompanhamento próximo.",
  },
  {
    titulo: "Saúde metabólica",
    texto:
      "Atenção aos marcadores do metabolismo e aos fatores que influenciam o seu equilíbrio no dia a dia.",
  },
  {
    titulo: "Equilíbrio hormonal",
    texto:
      "Avaliação e acompanhamento de queixas relacionadas aos hormônios, com investigação individualizada.",
  },
  {
    titulo: "Longevidade e prevenção",
    texto:
      "Check-ups, rastreamento e construção de hábitos sustentáveis ao longo da vida.",
  },
  {
    titulo: "Performance e composição corporal",
    texto:
      "Suporte médico e nutricional para treino, recuperação e evolução da composição corporal.",
  },
  {
    titulo: "Nutrição clínica",
    texto:
      "Acompanhamento nutricional individualizado, do cotidiano às demandas específicas de cada fase.",
  },
];

export default function AreasDeCuidado() {
  return (
    <section id="areas" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Áreas de cuidado"
          title="Frentes que o Instituto acompanha"
          sub="[Conteúdo provisório — revisar e ajustar às áreas reais de atuação.]"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.titulo}
              className="rounded-3xl border border-line bg-surface p-6"
            >
              <h3 className="font-display text-lg font-medium text-ink">
                {area.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {area.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
