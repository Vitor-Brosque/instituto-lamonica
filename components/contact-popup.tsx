"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { IconChat, IconX } from "@/components/icons";

const STORAGE_KEY = "lamonica-cta-popup-dismissed";

// Convite não-bloqueante: aparece quando o visitante alcança "Como funciona"
// e, uma vez fechado, não retorna na mesma visita.
export default function ContactPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const alvo = document.querySelector("#como-funciona");
    if (!alvo) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  const fechar = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <aside
      aria-label="Convite para agendar pelo WhatsApp"
      className="fixed bottom-24 left-5 right-5 z-50 mx-auto max-w-sm rounded-3xl border border-line bg-surface p-5 shadow-xl sm:left-auto sm:right-5 sm:mx-0"
    >
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar convite"
        className="absolute right-1.5 top-1.5 flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-ink"
      >
        <IconX className="h-5 w-5" />
      </button>
      <p className="pr-10 font-display text-lg font-medium leading-snug text-ink">
        Quer saber se o acompanhamento é para você?
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        Chame no WhatsApp e a equipe orienta o próximo passo.
      </p>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-strong"
      >
        <IconChat className="h-5 w-5 shrink-0" />
        Agendar avaliação
      </a>
    </aside>
  );
}
