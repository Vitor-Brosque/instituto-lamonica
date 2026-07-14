import CtaButton from "@/components/cta-button";
import Placeholder from "@/components/placeholder";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Medicina · Nutrição · Longevidade — {site.cidade}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.06] tracking-tight text-ink">
            Do metabolismo à longevidade, um cuidado que caminha junto
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            No {site.nomeCompleto}, avaliação médica e acompanhamento
            nutricional acontecem no mesmo plano de cuidado — para
            emagrecimento, saúde metabólica, longevidade e performance.
          </p>
          <div className="mt-9">
            <CtaButton size="lg" />
          </div>
          <p className="mt-5 text-sm text-muted">
            Atendimento presencial em {site.cidade} ·{" "}
            <a href={site.telefoneHref} className="font-medium text-ink-soft">
              {site.telefone}
            </a>
          </p>
        </div>
        <Placeholder
          label="Foto do casal — médico e nutricionista (substituir por foto real)"
          className="aspect-[4/5] w-full max-w-md justify-self-center lg:justify-self-end"
        />
      </div>
    </section>
  );
}
