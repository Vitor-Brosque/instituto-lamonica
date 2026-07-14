"use client";

import { useState } from "react";
import CtaButton from "@/components/cta-button";
import { IconMenu, IconX } from "@/components/icons";

const links = [
  { href: "#objetivos", label: "Objetivos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#instituto", label: "O Instituto" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#" className="leading-tight">
          <span className="block font-display text-lg font-semibold tracking-tight text-ink">
            Instituto Lamônica
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
            Saúde Integrativa · Bauru
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <CtaButton />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Menu móvel"
          className="border-t border-line bg-canvas px-5 pb-6 pt-3 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-base font-medium text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-5 sm:hidden">
            <CtaButton />
          </div>
        </nav>
      )}
    </header>
  );
}
