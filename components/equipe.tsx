import SectionHeading from "@/components/section-heading";
import Placeholder from "@/components/placeholder";

const profissionais = [
  {
    foto: "Foto — médico (substituir por foto real)",
    nome: "[Nome do médico]",
    papel: "Médico",
    bio: "[Bio — formação, área de atuação e abordagem clínica. Inserir texto real.]",
    registro: "[CRM e titulações — inserir dados reais]",
  },
  {
    foto: "Foto — nutricionista (substituir por foto real)",
    nome: "[Nome da nutricionista]",
    papel: "Nutricionista",
    bio: "[Bio — formação, área de atuação e abordagem nutricional. Inserir texto real.]",
    registro: "[CRN e titulações — inserir dados reais]",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Quem cuida de você"
          title="Um casal, duas especialidades, o mesmo cuidado"
          sub="O atendimento é conduzido por um médico e uma nutricionista que trabalham lado a lado — na clínica e na vida."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {profissionais.map((pessoa) => (
            <article
              key={pessoa.papel}
              className="rounded-3xl border border-line bg-canvas p-5"
            >
              <Placeholder label={pessoa.foto} className="aspect-[4/5] w-full" />
              <div className="px-2 pb-3 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {pessoa.papel}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                  {pessoa.nome}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {pessoa.bio}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted">
                  {pessoa.registro}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
