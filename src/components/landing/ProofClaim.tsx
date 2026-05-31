import type { ProofClaim as ProofClaimData, ProofSnapshot } from "@/data/landing";

type ProofClaimProps = {
  claim: ProofClaimData;
};

export function ProofClaim({ claim }: ProofClaimProps) {
  return (
    <section className="relative overflow-hidden bg-[#1400ff] px-5 py-12 md:px-8">
      <div className="absolute inset-0 bg-stripes" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div data-reveal>
          <p className="ds-kicker text-[#00ff41]">{claim.eyebrow}</p>
          <h2 className="ds-display-sm mt-3">
            {claim.titleLines[0]}
            <br />
            <span className="text-[#ffe600]">{claim.titleLines[1]}</span>
            <br />
            {claim.titleLines[2]}
          </h2>
          <p className="ds-body mt-4 max-w-md text-white/68">{claim.body}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-display text-lg font-black uppercase sm:gap-4 md:flex-nowrap md:text-xl" data-reveal>
          <ProofSnapshotCard snapshot={claim.snapshots[0]} />
          <div className="text-3xl text-[#00ff41]">→</div>
          <ProofSnapshotCard snapshot={claim.snapshots[1]} featured />
        </div>
      </div>
    </section>
  );
}

function ProofSnapshotCard({ snapshot, featured = false }: { snapshot: ProofSnapshot; featured?: boolean }) {
  const className = featured
    ? "bk-box btn-cut border-2 border-[#00ff41] bg-[#0a0a0a] px-5 py-4 text-[#00ff41] md:px-6"
    : "bk-box btn-cut bg-black/35 px-5 py-4 md:px-6";

  const content = (
    <>
      <span className="block">{snapshot.label}</span>
    </>
  );

  if (snapshot.href) {
    return (
      <a
        className={className}
        href={snapshot.href}
        target="_blank"
        rel="noopener noreferrer"
        data-magnetic="true"
        aria-label={`${snapshot.name}${snapshot.category ? ` - ${snapshot.category}` : ""}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={className}
      data-magnetic="true"
      aria-label={`${snapshot.name}${snapshot.category ? ` - ${snapshot.category}` : ""}`}
    >
      {content}
    </div>
  );
}
