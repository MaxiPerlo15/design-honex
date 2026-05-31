import type { ClientItem } from "@/data/landing";

type ClientMarqueeProps = {
  clients: ClientItem[];
  label: string;
};

export function ClientMarquee({ clients, label }: ClientMarqueeProps) {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="flex items-center gap-6 border-y border-white/10 bg-[#0a0a0a] py-4" data-reveal>
      <span className="shrink-0 pl-5 font-mono text-[14px] uppercase tracking-[0.18em] text-[#00ff41] md:pl-8">
        {label}
      </span>
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.14em] text-white/50">
          {repeatedClients.map((client, index) =>
            client.href ? (
              <a
                key={`${client.name}-${index}`}
                className="mx-4 inline-flex items-center gap-4"
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${client.name} - abrir perfil`}
                data-magnetic="true"
              >
                {client.name}
                <span className="text-[#1400ff]">✦</span>
              </a>
            ) : (
              <span key={`${client.name}-${index}`} className="mx-4 inline-flex items-center gap-4">
                {client.name}
                <span className="text-[#1400ff]">✦</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
