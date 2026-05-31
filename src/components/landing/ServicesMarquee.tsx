import type { ServicesMarqueeItem } from "@/data/landing";

type ServicesMarqueeProps = {
  services: ServicesMarqueeItem[];
  label: string;
};

export function ServicesMarquee({ services, label }: ServicesMarqueeProps) {
  const repeatedServices = [...services, ...services];

  return (
    <section className="flex items-center gap-6 border-y border-white/10 bg-[#0a0a0a] py-4" data-reveal>
      <span className="shrink-0 pl-5 font-mono text-[14px] uppercase tracking-[0.18em] text-[#00ff41] md:pl-8">
        {label}
      </span>
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.14em] text-white/50">
          {repeatedServices.map((service, index) =>
            service.href ? (
              <a
                key={`${service.name}-${index}`}
                className="mx-4 inline-flex items-center gap-4"
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${service.name} - abrir`}
                data-magnetic="true"
              >
                {service.name}
                <span className="text-[#1400ff]">✦</span>
              </a>
            ) : (
              <span key={`${service.name}-${index}`} className="mx-4 inline-flex items-center gap-4">
                {service.name}
                <span className="text-[#1400ff]">✦</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

