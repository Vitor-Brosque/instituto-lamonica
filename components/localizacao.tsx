import SectionHeading from "@/components/section-heading";
import Placeholder from "@/components/placeholder";
import {
  IconChat,
  IconClock,
  IconInstagram,
  IconMapPin,
  IconPhone,
} from "@/components/icons";
import { site } from "@/lib/site";

export default function Localizacao() {
  return (
    <section id="contato" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Localização e contato"
          title="Onde estamos em Bauru"
          sub="Jardim Europa — com fácil acesso e estacionamento na região."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <ul className="space-y-4 rounded-3xl border border-line bg-canvas p-7">
            {[
              {
                icon: IconMapPin,
                titulo: "Endereço",
                linhas: [site.endereco, site.bairro],
              },
              {
                icon: IconPhone,
                titulo: "Telefone",
                linhas: [site.telefone],
                href: site.telefoneHref,
              },
              {
                icon: IconChat,
                titulo: "WhatsApp",
                linhas: ["Agendar avaliação pelo WhatsApp"],
                href: site.whatsapp,
              },
              {
                icon: IconClock,
                titulo: "Horário de atendimento",
                linhas: [site.horario, site.horarioFimDeSemana],
              },
              {
                icon: IconInstagram,
                titulo: "Instagram",
                linhas: [site.instagramHandle],
                href: site.instagram,
              },
            ].map((item) => (
              <li key={item.titulo} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.titulo}</p>
                  {item.linhas.map((linha) =>
                    item.href ? (
                      <a
                        key={linha}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block text-[15px] font-medium text-brand underline-offset-4 hover:underline"
                      >
                        {linha}
                      </a>
                    ) : (
                      <p key={linha} className="text-[15px] text-muted">
                        {linha}
                      </p>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Placeholder
            label="Mapa — incorporar Google Maps do endereço"
            className="min-h-72 lg:min-h-full"
          />
        </div>
      </div>
    </section>
  );
}
