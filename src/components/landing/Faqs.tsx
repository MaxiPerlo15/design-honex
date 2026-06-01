"use client";

import { useId, useMemo, useState } from "react";

import type { FaqItem } from "@/data/landing";

type FaqsProps = {
  items: FaqItem[];
};

export function Faqs({ items }: FaqsProps) {
  const baseId = useId();
  const listId = useMemo(() => `${baseId}-list`, [baseId]);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return (
    <section
      id="faqs"
      className="scroll-mt-28 border-y border-white/10 bg-[#0d0d0d] px-5 pb-20 pt-10 md:scroll-mt-32 md:px-8 md:py-24"
    >
        <div className="mx-auto max-w-6xl">
          <div className="fade-in" data-reveal>
          <p className="ds-kicker -translate-y-8 text-[#00ff41] md:translate-y-0">Preguntas Frecuentes</p>

          <h2 className="ds-display mt-1 text-center md:mt-3 md:text-left">
            <span className="hidden md:inline">
              ¿Tenés <span className="text-outline">dudas?</span>
            </span>
            <button
              type="button"
              className="group relative flex w-full items-center justify-center px-10 text-center uppercase md:hidden"
              aria-controls={listId}
              aria-expanded={isMobileExpanded}
              onClick={() => {
                setIsMobileExpanded((prev) => {
                  const next = !prev;
                  if (!next) setOpenItemId(null);
                  return next;
                });
              }}
            >
              <span>
                ¿Tenés <span className="text-outline">dudas?</span>
              </span>
              <span
                aria-hidden="true"
                className={[
                  "absolute right-0 shrink-0 text-[#00ff41] transition-transform duration-300",
                  isMobileExpanded ? "rotate-180" : "rotate-0",
                ].join(" ")}
              >
                ↓
              </span>
            </button>
          </h2>
        </div>

        <div
          id={listId}
          data-testid="faqs-list"
          data-mobile-state={isMobileExpanded ? "open" : "closed"}
          className={[isMobileExpanded ? "block" : "hidden", "mt-10", "md:block", "md:mt-14"].join(" ")}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-[0_0_0_1px_rgba(0,0,0,0.25),0_22px_70px_rgba(0,0,0,0.55)]">
            <ul className="divide-y divide-white/10">
              {items.map((item) => {
                const buttonId = `${baseId}-${item.id}-button`;
                const panelId = `${baseId}-${item.id}-panel`;
                const isOpen = openItemId === item.id;
                const hasAnswer = Boolean(item.answer?.trim());

                return (
                  <li key={item.id} className={isOpen ? "bg-white/[0.02]" : undefined}>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left font-display text-[13px] font-black uppercase tracking-[0.12em] text-white/90 transition hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4 md:px-7 md:py-5"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenItemId((prev) => (prev === item.id ? null : item.id))}
                    >
                      <span className="max-w-[56ch] md:max-w-none">{item.question}</span>
                      <span
                        aria-hidden="true"
                        className={[
                          "shrink-0 font-display text-2xl text-[#00ff41] transition-transform duration-300",
                          isOpen ? "rotate-45" : "rotate-0",
                        ].join(" ")}
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={[
                        "grid pt-0 transition-[grid-template-rows,opacity] duration-300 ease-out",
                        hasAnswer ? "px-5 pb-5 md:px-7 md:pb-6" : "px-0 pb-0",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        {item.answer ? <p className="ds-body text-white/66 md:text-white/56">{item.answer}</p> : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
