import SectionHeading from "@/components/section-heading";
import { IconChevronDown } from "@/components/icons";
import { site } from "@/lib/site";

const perguntas = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A avaliação inicial é uma consulta ampla: histórico de saúde, rotina, exames que você já tiver e seus objetivos. A partir dela, definimos a investigação e o plano de cuidado.",
  },
  {
    q: "O atendimento é feito pelo médico ou pela nutricionista?",
    a: "Pelos dois. O acompanhamento combina a avaliação médica e o acompanhamento nutricional em um único plano, construído em conjunto.",
  },
  {
    q: "Preciso levar exames na primeira consulta?",
    a: "Se você tiver exames recentes, leve — eles ajudam na avaliação. Caso necessário, exames complementares podem ser solicitados após a consulta.",
  },
  {
    q: "Vocês atendem por convênio?",
    a: "[Placeholder — informar se o Instituto atende convênios, reembolso ou apenas particular.]",
  },
  {
    q: "Onde fica o Instituto?",
    a: `${site.endereco}, ${site.bairro}. O consultório fica na Torre 2, sala 1205.`,
  },
  {
    q: "Como faço para agendar?",
    a: `O agendamento é feito pelo WhatsApp — use o botão "Agendar avaliação" em qualquer parte do site — ou pelo telefone ${site.telefone}.`,
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns antes de agendar"
        />
        <div className="mt-10">
          {perguntas.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <IconChevronDown className="h-5 w-5 shrink-0 text-brand group-open:rotate-180" />
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
