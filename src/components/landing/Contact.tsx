import type { ContactLink } from "@/data/landing";

type ContactProps = {
  links: ContactLink[];
};

export function Contact({ links }: ContactProps) {
  return (
    <section
      id="contacto"
      className="scroll-mt-28 border-t border-white/10 bg-[#0a0a0a] px-5 py-20 md:scroll-mt-32 md:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div className="fade-in" data-reveal>
          <div className="inline-flex items-center gap-3 border border-[#00ff41]/40 px-4 py-2 font-mono text-[14px] font-bold uppercase tracking-[0.12em] text-[#00ff41]">
            <span className="pulse-dot" />
            Disponible para nuevos clientes
          </div>
          <h2 className="ds-display mt-7 text-center md:text-left">
            ¿<span className="text-[#4b3bff]">Arran</span>
            <br />
            <span className="text-outline">camos?</span>
          </h2>
          <p className="ds-body mt-6 max-w-md text-white/68 md:text-white/55">
            Escribime sin vuelta. Sin formularios raros ni reuniones eternas. Solo charlamos y vemos si podemos hacer algo juntos.
          </p>
        </div>

        <div className="fade-in grid gap-3" data-reveal>
          {links.map((link) => (
            <a
              key={link.label}
              className="contact-link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              data-magnetic="true"
            >
              <span>
                <span className="block font-mono text-[14px] uppercase tracking-[0.12em] text-white/46 md:text-white/34">
                  {link.label}
                </span>
                <span className="mt-1 block text-[1rem] text-white">{link.value}</span>
              </span>
              <span className="contact-arrow font-display text-3xl text-[#00ff41] transition">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
