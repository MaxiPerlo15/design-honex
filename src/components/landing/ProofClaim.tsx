import Image from "next/image";

import type { ProofClaim as ProofClaimData, ProofSnapshot } from "@/data/landing";

type ProofClaimProps = {
  claim: ProofClaimData;
};

export function ProofClaim({ claim }: ProofClaimProps) {
  return (
    <section className="relative overflow-hidden bg-[#1400ff] px-5 py-12 md:px-8">
      <div className="absolute inset-0 bg-stripes" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-14">
        <div className="max-w-xl" data-reveal>
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

        <div className="flex items-center gap-4 sm:gap-5 lg:gap-6" data-reveal>
          <ProofSnapshotCard snapshot={claim.snapshots[0]} />
          <div className="hidden text-3xl text-[#00ff41] sm:block">→</div>
          <ProofSnapshotCard snapshot={claim.snapshots[1]} featured />
        </div>
      </div>
    </section>
  );
}

function ProofSnapshotCard({ snapshot, featured = false }: { snapshot: ProofSnapshot; featured?: boolean }) {
  const className = featured
    ? "bk-box rounded-3xl border-2 border-[#00ff41] text-[#00ff41]"
    : "bk-box rounded-3xl border border-white/15 text-white/88";

  const content = (
    <>
      {snapshot.image ? (
        <Image
          src={snapshot.image}
          alt={snapshot.name}
          fill
          sizes="(min-width: 768px) 260px, 72vw"
          className="object-cover object-top transition duration-500 scale-[1] group-hover:scale-[1.05]"
        />
      ) : null}
    </>
  );

  if (snapshot.href) {
    return (
      <a
        className={`group relative flex aspect-[4/5] w-full overflow-hidden ${className}`}
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
      className={`group relative flex aspect-[4/5] w-full overflow-hidden ${className}`}
      data-magnetic="true"
      aria-label={`${snapshot.name}${snapshot.category ? ` - ${snapshot.category}` : ""}`}
    >
      {content}
    </div>
  );
}
