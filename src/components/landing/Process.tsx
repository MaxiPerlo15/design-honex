import type { ProcessStep } from "@/data/landing";

type ProcessProps = {
  steps: ProcessStep[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <section id="proceso" className="process-section relative overflow-hidden bg-[#1400ff] px-5 py-20 md:px-8 md:py-24">
      <div className="absolute inset-0 bg-stripes" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div data-reveal>
          <p className="ds-kicker text-[#00ff41]">Sin vueltas</p>
          <h2 className="ds-display mt-3">
            Así
            <br />
            <span className="text-outline">trabajo</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="step-card fade-in min-h-60 bg-[#0a0a0a] p-7"
              data-num={step.number}
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="number-pill">{step.number}</div>
              <h3 className="ds-card-title mt-8">{step.title}</h3>
              <p className="ds-card-copy mt-4 text-white/56">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
