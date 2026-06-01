"use client";

import Image from "next/image";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import type { NavLink } from "@/data/landing";

type NavProps = {
  logoSrc: string;
  logoAlt: string;
  links: NavLink[];
};

export function Nav({ logoSrc, logoAlt, links }: NavProps) {
  const menuId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstItemRef = useRef<HTMLAnchorElement | null>(null);

  const desktopLinks = links;
  const mobileLinks = useMemo(() => links.filter((link) => !link.emphasis), [links]);
  const ctaLink = useMemo(
    () => links.find((link) => link.emphasis) ?? links[links.length - 1],
    [links],
  );

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", isOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      hamburgerButtonRef.current?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => firstItemRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  return (
    <>
      <header data-nav className="fixed inset-x-0 top-0 z-50 border-b border-black bg-[#0a0a0a]/86 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
          aria-label="Design Honex"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={370}
            height={584}
            className="h-11 w-auto shrink-0 object-contain md:h-12"
            priority
          />
          <span className="font-display text-base font-black uppercase leading-none tracking-[0.08em] text-[#00ff41] md:text-lg">
            Director <span className="block md:inline">Creativo</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 font-display text-[14px] font-bold uppercase tracking-[0.14em] text-white/50 md:flex">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              className={
                link.emphasis
                  ? "btn-cut magnetic bg-[#1400ff] px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#0d00cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
                  : "nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
              }
              href={link.href}
              data-magnetic={link.emphasis ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 md:hidden">
          <button
            ref={hamburgerButtonRef}
            type="button"
            className="btn-cut inline-flex items-center gap-2 border border-white/15 bg-black/30 px-3 py-2 font-display text-[14px] font-black uppercase tracking-[0.12em] text-white/80 transition hover:border-[#00ff41]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span aria-hidden="true" className="text-[#00ff41]">
              {isOpen ? "×" : "≡"}
            </span>
            <span>Menú</span>
          </button>
        </div>
        </nav>
      </header>

      {isOpen ? (
        <div className="nav-fade-in fixed inset-0 z-[60] md:hidden" aria-hidden="false">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
          />

          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="nav-slide-in absolute right-0 top-0 flex h-full w-[min(86vw,380px)] flex-col overflow-hidden border-l border-white/10 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_30px_80px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-5 py-3.5">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-white/60">
                Navegación
              </span>
              <button
                type="button"
                className="btn-cut inline-flex items-center gap-2 border border-white/15 bg-black/30 px-3 py-2 font-display text-[13px] font-black uppercase tracking-[0.12em] text-white/86 transition hover:border-[#00ff41]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
                onClick={() => {
                  setIsOpen(false);
                  hamburgerButtonRef.current?.focus();
                }}
              >
                <span aria-hidden="true" className="text-[#00ff41]">
                  ×
                </span>
                Cerrar
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-5 overscroll-contain">
                <div className="grid gap-1.5 pb-5">
                  {mobileLinks.map((link, index) => (
                    <a
                      key={link.href}
                      ref={index === 0 ? firstItemRef : undefined}
                      className="btn-cut flex items-center justify-between gap-4 border border-white/10 bg-[#0f0f0f] px-4 py-2.5 font-display text-[13px] font-black uppercase tracking-[0.12em] text-white/92 transition hover:border-[#00ff41]/45 hover:bg-[#0b0b0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true" className="text-white/25">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-4 sticky bottom-0 bg-[#0a0a0a]">
                <a
                  className="btn-cut magnetic block bg-[#1400ff] px-5 py-3.5 text-center font-display text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#0d00cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
                  href={ctaLink.href}
                  data-magnetic="true"
                  onClick={() => setIsOpen(false)}
                >
                  {ctaLink.label} →
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
