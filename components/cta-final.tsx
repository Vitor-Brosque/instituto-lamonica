import CtaButton from "@/components/cta-button";
import { site } from "@/lib/site";

export default function CtaFinal() {
  return (
    <section className="bg-brand-deep">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-tint">
          Agendamento
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-canvas">
          Comece pela avaliação inicial
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-canvas/70 md:text-lg">
          O primeiro passo é simples: uma conversa pelo WhatsApp para agendar a
          sua avaliação médica e nutricional.
        </p>
        <div className="mt-9">
          <CtaButton variant="light" size="lg" />
        </div>
        <p className="mt-6 text-sm text-canvas/50">
          Se preferir, ligue: {site.telefone}
        </p>
      </div>
    </section>
  );
}
