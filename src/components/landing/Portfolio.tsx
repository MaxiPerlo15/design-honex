import Image from "next/image";

import type { PortfolioItem } from "@/data/landing";

type PortfolioProps = {
  items: PortfolioItem[];
};

export function Portfolio({ items }: PortfolioProps) {
  const carouselItems = [...items, { name: "Proximamente", category: "Portfolio" }];
  const repeatedItems = [...carouselItems, ...carouselItems];

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 overflow-hidden bg-[#0a0a0a] px-5 py-20 md:scroll-mt-32 md:px-8 md:py-24"
    >
      <div className="fade-in mx-auto grid max-w-6xl gap-7 md:grid-cols-2 md:items-end" data-reveal>
        <div>
          <p className="ds-kicker text-[#00ff41]">Portfolio</p>
          <h2 className="ds-display mt-3">
            Marcas
            <br />
            <span className="text-outline">reales.</span>
          </h2>
        </div>
        <p className="ds-body max-w-lg text-white/68 md:self-center md:pt-10 lg:pt-14">
          Branding, RRSS y contenido para negocios de Córdoba y del país. Esto es lo que hago, no lo que prometo.
        </p>
      </div>

      <div className="logo-marquee -mx-5 mt-12 md:-mx-8">
        <div className="logo-track">
          {repeatedItems.map((item, index) => {
            const isSoonCard = item.name === "Proximamente";
            const logoScale = item.imageScale ?? 1;
            const card = (
              <article
                className={`logo-card ${isSoonCard ? "portfolio-soon" : "brand-card"}`}
                aria-label={item.name || "Marca"}
                title={item.name || "Marca"}
              >
                {isSoonCard ? (
                  <>
                    <div className="portfolio-soon-bg" aria-hidden="true" />
                    <div className="portfolio-content portfolio-content-soon">
                      <h3 className="font-display text-xl font-black uppercase tracking-[0.04em] text-white/92">
                        Proximamente...
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="portfolio-bg" aria-hidden="true">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 768px) 280px, 220px"
                          className="object-contain"
                          style={logoScale === 1 ? undefined : { transform: `scale(${logoScale})` }}
                        />
                      ) : (
                        <span>{item.mark ?? item.name.slice(0, 2).toUpperCase()}</span>
                      )}
                    </div>
                    <span className="sr-only">{item.name}</span>
                  </>
                )}
              </article>
            );

            if (!isSoonCard && item.href) {
              return (
                <a
                  key={`${item.name}-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-magnetic="true"
                >
                  {card}
                </a>
              );
            }

            return <div key={`${item.name}-${index}`}>{card}</div>;
          })}
        </div>
      </div>

      <div className="pt-10 text-center">
        <a
          className="btn-cut magnetic fade-in inline-flex border-2 border-white/25 px-7 py-4 font-display text-sm font-black uppercase tracking-[0.12em] transition hover:-translate-y-1 hover:border-[#00ff41] hover:text-[#00ff41]"
          href="https://www.instagram.com/designhonex"
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic="true"
          data-reveal
        >
          Ver muestras reales en Instagram →
        </a>
      </div>
    </section>
  );
}
