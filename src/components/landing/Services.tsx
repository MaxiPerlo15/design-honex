import type { ServiceItem } from "@/data/landing";

type ServicesProps = {
  services: ServiceItem[];
};

export function Services({ services }: ServicesProps) {
  return (
    <section
      id="servicios"
      className="scroll-mt-28 bg-[#0a0a0a] px-5 py-20 md:scroll-mt-32 md:px-8 md:py-24"
    >
        <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <p className="ds-kicker -translate-y-8 text-[#00ff41] md:translate-y-0">Lo que hago</p>
          <h2 className="ds-display mt-3">
            Servicios
            <br />
            <span className="text-outline">& soluciones</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="service-card fade-in min-h-64 bg-[#0a0a0a] p-7"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="number-pill">{service.number}</div>
              <h3 className="ds-card-title mt-8">{service.title}</h3>
              <p className="ds-card-copy mt-4 text-white/68 md:text-white/56">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
