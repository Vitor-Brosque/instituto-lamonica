import SectionHeading from "@/components/section-heading";
import Placeholder from "@/components/placeholder";
import { site } from "@/lib/site";

export default function Instituto() {
  return (
    <section id="instituto" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionHeading
            align="left"
            eyebrow="O Instituto"
            title="Um espaço pensado para o seu cuidado"
          />
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            O {site.nomeCompleto} fica no Jardim Europa, em Bauru — sala 1205
            da Torre 2, na Av. Getúlio Vargas. A estrutura foi planejada para
            que consultas médicas e nutricionais aconteçam no mesmo lugar, sem
            deslocamentos entre etapas do cuidado.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            [Texto institucional — inserir história, propósito e diferenciais
            reais do Instituto.]
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Placeholder
            label="Foto — recepção (substituir)"
            className="col-span-2 aspect-video"
          />
          <Placeholder
            label="Foto — consultório médico (substituir)"
            className="aspect-square"
          />
          <Placeholder
            label="Foto — consultório nutricional (substituir)"
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
