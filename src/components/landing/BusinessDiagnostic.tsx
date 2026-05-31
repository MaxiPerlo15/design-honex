"use client";

import { useEffect, useRef, useState } from "react";
import {
  DollarSign,
  Eye,
  Flame,
  Megaphone,
  Paintbrush,
  Rocket,
  Smartphone,
  Sprout,
  Target,
  Trophy,
  TrendingUp,
  Workflow,
  RotateCcw,
} from "lucide-react";

import type {
  BusinessDiagnosticContent,
  BusinessDiagnosticQ1Id,
  BusinessDiagnosticResultId,
  QuizOption,
} from "@/data/landing";

const diagnosticIcons = {
  sprout: Sprout,
  trendingUp: TrendingUp,
  trophy: Trophy,
  flame: Flame,
  paintbrush: Paintbrush,
  smartphone: Smartphone,
  eye: Eye,
  dollarSign: DollarSign,
  megaphone: Megaphone,
  target: Target,
  rocket: Rocket,
  workflow: Workflow,
} as const;

const resultIcons = {
  paintbrush: Paintbrush,
  sprout: Sprout,
  eye: Eye,
  dollarSign: DollarSign,
  megaphone: Megaphone,
  target: Target,
  rocket: Rocket,
  workflow: Workflow,
} as const;

type BusinessDiagnosticProps = {
  content: BusinessDiagnosticContent;
};

export function BusinessDiagnostic({ content }: BusinessDiagnosticProps) {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [selectedQ1, setSelectedQ1] = useState<BusinessDiagnosticQ1Id | null>(null);
  const [selectedResult, setSelectedResult] = useState<BusinessDiagnosticResultId | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const currentQuestion = step === 0 ? content.q1 : selectedQ1 ? content.q2[selectedQ1] : null;
  const currentResult = selectedResult ? content.results[selectedResult] : null;
  const CurrentResultIcon = currentResult ? resultIcons[currentResult.icon] : null;
  const selectedQ1Option = selectedQ1 ? content.q1.options.find((option) => option.value === selectedQ1) ?? null : null;
  const selectedQ2Option =
    selectedQ1 && selectedResult
      ? content.q2[selectedQ1].options.find((option) => option.value === selectedResult) ?? null
      : null;
  const whatsappHref =
    currentResult && selectedQ1Option
      ? buildWhatsAppHref(content, selectedQ1Option, selectedQ2Option, currentResult)
      : null;

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const scheduleAdvance = (advance: () => void, choiceValue: string) => {
    setSelectedChoice(choiceValue);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      advance();
      setSelectedChoice(null);
    }, 300);
  };

  const handleRestart = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setStep(0);
    setSelectedQ1(null);
    setSelectedResult(null);
    setSelectedChoice(null);
  };

  const handleQ1 = (value: BusinessDiagnosticQ1Id) => {
    scheduleAdvance(() => {
      setSelectedQ1(value);
      setStep(1);
    }, value);
  };

  const handleQ2 = (value: BusinessDiagnosticResultId) => {
    scheduleAdvance(() => {
      setSelectedResult(value);
      setStep(2);
    }, value);
  };

  return (
    <section
      id={content.sectionId}
      className="quiz-section relative bg-[#1400ff] scroll-mt-28 px-5 py-20 md:scroll-mt-32 md:px-8 md:py-24"
    >
      <div className="quiz-inner">
        <div data-reveal>
          <p className="quiz-eyebrow">{content.eyebrow}</p>
          <h2 className="quiz-h2">
            {content.titleLines[0]}{" "}
            <br />
            <span className="outline">{content.titleLines[1]}</span>
          </h2>
          <p className="quiz-sub">{content.body}</p>
        </div>

        <div className="quiz-steps-bar" aria-label="Progreso del diagnóstico">
          <span className={`quiz-step-dot ${step === 0 ? "active" : "done"}`} aria-hidden="true" />
          <span className={`quiz-step-dot ${step === 1 ? "active" : step === 2 ? "done" : ""}`} aria-hidden="true" />
        </div>

        {step < 2 && currentQuestion ? (
          <>
            <p className="quiz-question">{currentQuestion.question}</p>

            <div className="quiz-options">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedChoice === option.value;
                const Icon = diagnosticIcons[option.icon];

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={[
                      "quiz-option btn-cut focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] focus-visible:outline-offset-4",
                      isSelected ? "selected" : "",
                    ].join(" ")}
                    onClick={() => {
                      if (step === 0) {
                        handleQ1(option.value as BusinessDiagnosticQ1Id);
                        return;
                      }

                      handleQ2(option.value as BusinessDiagnosticResultId);
                    }}
                    aria-pressed={isSelected}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <span className="quiz-option-icon" aria-hidden="true">
                      <Icon className="size-5 shrink-0 text-[#00ff41]" strokeWidth={2.15} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold uppercase tracking-[0.02em]">{option.label}</span>
                      <small className="mt-1 block text-[15px] text-white/55">{option.sub}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        <article
          className="quiz-result show"
          role="region"
          aria-label="Diagnóstico"
          aria-live="polite"
          style={{ display: currentResult ? "block" : "none" }}
        >
          {currentResult && whatsappHref ? (
            <>
              <p className="result-tag">
                <span className="result-tag-icon" aria-hidden="true">
                  {CurrentResultIcon ? (
                    <CurrentResultIcon className="size-4 shrink-0 text-[#00ff41]" strokeWidth={2.2} />
                  ) : null}
                </span>
                <span>{currentResult.tag}</span>
              </p>
              <h3 className="result-title">{currentResult.title}</h3>
              <p className="result-desc">{currentResult.desc}</p>

              <p className="font-mono text-[14px] uppercase tracking-[0.16em] text-white/38">
                Acciones sugeridas
              </p>

              <div className="result-services">
                {currentResult.services.map((item) => (
                  <span key={item} className="result-service-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="result-cta-row">
                <a
                  className="btn-white"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${content.ctaLabel} por WhatsApp`}
                >
                  {content.ctaLabel} →
                </a>
                <button type="button" className="quiz-restart" onClick={handleRestart}>
                  <RotateCcw className="size-4 shrink-0" strokeWidth={2.25} />
                  {content.restartLabel}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="result-tag">
                <span className="result-tag-icon" aria-hidden="true">
                  <Workflow className="size-4 shrink-0 text-[#00ff41]" strokeWidth={2.2} />
                </span>
                <span>Diagnóstico</span>
              </p>
              <h3 className="result-title">Elegí una etapa para ver la lectura</h3>
              <p className="result-desc">
                El resultado aparece abajo de las opciones. No hay cambio de página ni pasos extra.
              </p>
            </>
          )}
        </article>
      </div>
    </section>
  );
}

function buildWhatsAppHref(
  content: BusinessDiagnosticContent,
  q1Option: QuizOption,
  q2Option: QuizOption | null,
  result: { title: string },
) {
  const phone = `${content.whatsappCountryCode}${content.whatsappNumber}`.replace(/\D/g, "");
  const message = [
    `Hola, estoy en la etapa "${q1Option.label}".`,
    q2Option ? `Me interesa "${q2Option.label}".` : "",
    `Quiero conversar sobre: ${result.title.toLowerCase()}.`,
  ].filter(Boolean).join(" ");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
