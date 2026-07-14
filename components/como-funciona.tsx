import SectionHeading from "@/components/section-heading";
import CtaButton from "@/components/cta-button";
import {
  IconClipboard,
  IconFileText,
  IconRefresh,
  IconSearch,
} from "@/components/icons";

const etapas = [
  {
    icon: IconClipboard,
    titulo: "Avaliação inicial",
    texto:
      "Consulta ampla para entender histórico, rotina, exames e objetivos — o ponto de partida de todo o plano.",
  },
  {
    icon: IconSearch,
    titulo: "Investigação individualizada",
    texto:
      "Análise detalhada do quadro e, quando necessário, solicitação de exames complementares.",
  },
  {
    icon: IconFileText,
    titulo: "Plano médico e nutricional",
    texto:
      "Médico e nutricionista constroem juntos um plano único, realista para a sua rotina.",
  },
  {
    icon: IconRefresh,
    titulo: "Acompanhamento e ajustes",
    texto:
      "Retornos periódicos para acompanhar a evolução e ajustar a conduta conforme o corpo responde.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="O método"
          title="Como o acompanhamento funciona"
          sub="Do primeiro contato aos retornos, um caminho claro em quatro etapas."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, i) => (
            <li
              key={etapa.titulo}
              className="rounded-3xl border border-line bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-medium text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <etapa.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium leading-snug text-ink">
                {etapa.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {etapa.texto}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <CtaButton />
          <p className="mt-4 text-sm text-muted">
            O agendamento da avaliação inicial é feito pelo WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
