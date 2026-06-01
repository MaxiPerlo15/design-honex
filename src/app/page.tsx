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
  const siteUrl = "https://designhonex.com";
  const siteName = "Design Honex";
  const siteDescription =
    "Branding, diseño gráfico y contenido para redes para negocios en Córdoba y remoto. Estrategia visual clara para marcas que quieren destacar.";
  const businessId = `${siteUrl}/#business`;
  const webSiteId = `${siteUrl}/#website`;
  const webPageId = `${siteUrl}/#webpage`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": webSiteId,
        url: `${siteUrl}/`,
        name: siteName,
        description: siteDescription,
        inLanguage: "es-AR",
        publisher: {
          "@id": businessId,
        },
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: `${siteUrl}/`,
        name: `${siteName} | Branding, diseño gráfico y redes en Córdoba`,
        description: siteDescription,
        isPartOf: {
          "@id": webSiteId,
        },
        about: {
          "@id": businessId,
        },
        inLanguage: "es-AR",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: siteName,
        url: `${siteUrl}/`,
        description: siteDescription,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/logo-designhonex.webp`,
        telephone: "+543533432075",
        email: "designhonex@gmail.com",
        priceRange: "$$",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Design Honex",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: service.title,
            description: service.description,
            url: `${siteUrl}/#servicios`,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: service.description,
              provider: {
                "@id": businessId,
              },
              areaServed: ["Córdoba, Argentina", "Argentina", "Remote"],
            },
          })),
        },
        mainEntityOfPage: {
          "@id": webPageId,
        },
        sameAs: ["https://www.instagram.com/designhonex"],
      },
    ],
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
