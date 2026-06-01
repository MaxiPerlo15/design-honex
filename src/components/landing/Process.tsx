import type { ProcessStep } from "@/data/landing";

type ProcessProps = {
  steps: ProcessStep[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <section
      id="proceso"
      className="process-section relative scroll-mt-28 overflow-hidden bg-[#0a0a0a] px-5 py-20 md:scroll-mt-32 md:px-8 md:py-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="process-bg-video pointer-events-none absolute inset-0 h-full w-full object-cover md:hidden"
          autoPlay
          playsInline
          muted
          loop
          preload="none"
          poster="/videos/proceso-mobile-poster.jpg"
        >
          <source src="/videos/proceso-mobile.webm" type="video/webm" />
          <source src="/videos/proceso-mobile.mp4" type="video/mp4" />
        </video>
        <video
          className="process-bg-video pointer-events-none absolute inset-0 hidden h-full w-full object-cover md:block"
          autoPlay
          playsInline
          muted
          loop
          preload="none"
          poster="/videos/proceso-desktop-poster.jpg"
        >
          <source src="/videos/proceso-desktop.webm" type="video/webm" />
          <source src="/videos/proceso-desktop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div data-reveal>
          <p className="ds-kicker -translate-y-8 text-[#00ff41] md:translate-y-0">Sin vueltas</p>
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
              <p className="ds-card-copy mt-4 text-white/68 md:text-white/56">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
