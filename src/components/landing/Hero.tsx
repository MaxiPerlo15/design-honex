import type { HeroContent } from "@/data/landing";
import Image from "next/image";

type HeroProps = {
  hero: HeroContent;
};

export function Hero({ hero }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[620px] bg-[#0a0a0a] px-5 pb-12 pt-24 md:min-h-[600px] md:px-8 md:pt-28 xl:min-h-[640px]">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="max-w-2xl transform-none">
          <p className="ds-kicker text-[#00ff41]">
            {hero.eyebrow}
          </p>
          <h1 className="ds-hero hero-title mt-5" aria-label={hero.titleLines.join(" ")}>
            <span className="hero-line hero-line-1 block">{hero.titleLines[0]} </span>
            <span className="hero-line hero-line-2 text-outline block">{hero.titleLines[1]} </span>
            <span className="hero-line hero-line-3 block text-[#4b3bff]">{hero.titleLines[2]}</span>
          </h1>
          <p className="hero-copy ds-body mt-6 max-w-md text-white/58">
            {hero.body}
          </p>
          <div className="hero-actions mt-8 flex flex-wrap gap-4">
            <a
              className="hero-cta hero-cta-1 btn-cut btn-blue magnetic px-7 py-4 font-display text-sm font-black uppercase tracking-[0.12em]"
              href={hero.ctas[0].href}
              data-magnetic="true"
            >
              {hero.ctas[0].label}
            </a>
            <a
              className="hero-cta hero-cta-2 btn-cut magnetic border-2 border-white/25 px-7 py-4 font-display text-sm font-black uppercase tracking-[0.12em] transition hover:-translate-y-1 hover:border-[#00ff41] hover:text-[#00ff41]"
              href={hero.ctas[1].href}
              data-magnetic="true"
            >
              {hero.ctas[1].label}
            </a>
          </div>
        </div>

        <div className="hidden items-center justify-end md:flex">
          <Image
            src={hero.logoSrc}
            alt={hero.logoAlt}
            width={370}
            height={584}
            priority
            className="h-auto w-full max-w-[280px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)] lg:max-w-[320px]"
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 0px"
          />
        </div>
      </div>
    </section>
  );
}
