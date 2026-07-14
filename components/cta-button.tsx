import { site } from "@/lib/site";
import { IconChat } from "@/components/icons";

type CtaButtonProps = {
  label?: string;
  variant?: "primary" | "light";
  size?: "md" | "lg";
};

// CTA único do site: abrir conversa de agendamento no WhatsApp.
export default function CtaButton({
  label = "Agendar avaliação",
  variant = "primary",
  size = "md",
}: CtaButtonProps) {
  const palette =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-strong"
      : "bg-canvas text-brand-deep hover:bg-cream";
  const sizing =
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full font-semibold ${palette} ${sizing}`}
    >
      <IconChat className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}
