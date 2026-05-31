import Image from "next/image";

import type { NavLink } from "@/data/landing";

type NavProps = {
  logoSrc: string;
  logoAlt: string;
  links: NavLink[];
};

export function Nav({ logoSrc, logoAlt, links }: NavProps) {
  const desktopLinks = links;
  const mobileLinks = links.filter((link) => !link.emphasis).slice(0, 2);
  const ctaLink = links.find((link) => link.emphasis) ?? links[links.length - 1];

  return (
    <header data-nav className="fixed inset-x-0 top-0 z-50 border-b border-black bg-[#0a0a0a]/86 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
          aria-label="Honex Design"
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

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-display text-[14px] font-black uppercase tracking-[0.12em] text-white/58 md:hidden">
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              className="nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn-cut bg-[#1400ff] px-3 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4"
            href={ctaLink.href}
          >
            {ctaLink.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
