import { AnimationEffects } from "@/components/landing/AnimationEffects";
import { ServicesMarquee } from "@/components/landing/ServicesMarquee";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { Portfolio } from "@/components/landing/Portfolio";
import { ProofClaim } from "@/components/landing/ProofClaim";
import { BusinessDiagnostic } from "@/components/landing/BusinessDiagnostic";
import { Faqs } from "@/components/landing/Faqs";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import {
  contactLinks,
  faqs,
  hero,
  navLinks,
  portfolioItems,
  proofClaim,
  processSteps,
  services,
  businessDiagnostic,
  servicesMarquee,
} from "@/data/landing";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Design Honex",
    url: "https://designhonex.com",
    description:
      "Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto. Estrategia + diseño con criterio.",
    image: "https://designhonex.com/opengraph-image",
    logo: "https://designhonex.com/logo-designhonex.webp",
    areaServed: ["Córdoba, Argentina", "Argentina", "Remote"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+543533432075",
        availableLanguage: ["es"],
      },
    ],
    sameAs: ["https://www.instagram.com/designhonex"],
  } as const;

  const faqsAreComplete = faqs.length > 0 && faqs.every((item) => Boolean(item.answer?.trim()));

  const faqsJsonLd = faqsAreComplete
    ? ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer!.trim(),
          },
        })),
      } as const)
    : null;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqsJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
        />
      ) : null}
      <AnimationEffects />
      <Nav logoSrc={hero.logoSrc} logoAlt={hero.logoAlt} links={navLinks} />
      <Hero hero={hero} />
      <ProofClaim claim={proofClaim} />
      <ServicesMarquee services={servicesMarquee} label="Especialista en →" />
      <Services services={services} />
      <BusinessDiagnostic content={businessDiagnostic} />
      <Portfolio items={portfolioItems} />
      <Process steps={processSteps} />
      <Faqs items={faqs} />
      <Contact links={contactLinks} />
      <Footer />
    </main>
  );
}
