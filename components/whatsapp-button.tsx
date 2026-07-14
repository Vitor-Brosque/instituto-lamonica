import { IconChat } from "@/components/icons";
import { site } from "@/lib/site";

// Botão flutuante de conversão — presente em toda a página.
export default function WhatsappButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-strong"
    >
      <IconChat className="h-6 w-6" />
    </a>
  );
}
