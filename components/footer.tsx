import { site } from "@/lib/site";

const navegacao = [
  { href: "#objetivos", label: "Objetivos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#instituto", label: "O Instituto" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-canvas/10 bg-brand-deep text-canvas">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">
            {site.nome}
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-canvas/50">
            Saúde Integrativa · Bauru
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-canvas/60">
            Medicina e nutrição integradas para emagrecimento, saúde
            metabólica, longevidade e performance.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-canvas/40">
            [Responsáveis técnicos — inserir nome, CRM e CRN reais.]
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-canvas/50">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {navegacao.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-canvas/75 hover:text-canvas"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-canvas/50">
            Contato
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-canvas/75">
            <li>{site.endereco}</li>
            <li>{site.bairro}</li>
            <li>
              <a href={site.telefoneHref} className="hover:text-canvas">
                {site.telefone}
              </a>
            </li>
            <li>{site.horario}</li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-canvas"
              >
                Instagram · {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-canvas hover:underline"
              >
                Agendar pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-canvas/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-canvas/40 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 {site.nomeCompleto}. Todos os direitos reservados.</p>
          <p>Site em construção — textos entre colchetes são provisórios.</p>
        </div>
      </div>
    </footer>
  );
}
