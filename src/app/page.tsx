import { AnimationEffects } from "@/components/landing/AnimationEffects";
import { ClientMarquee } from "@/components/landing/ClientMarquee";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { Portfolio } from "@/components/landing/Portfolio";
import { ProofClaim } from "@/components/landing/ProofClaim";
import { BusinessDiagnostic } from "@/components/landing/BusinessDiagnostic";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import {
  clients,
  contactLinks,
  hero,
  navLinks,
  portfolioItems,
  proofClaim,
  processSteps,
  services,
  businessDiagnostic,
} from "@/data/landing";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0a0a0a] text-white">
      <AnimationEffects />
      <Nav logoSrc={hero.logoSrc} logoAlt={hero.logoAlt} links={navLinks} />
      <Hero hero={hero} />
      <ProofClaim claim={proofClaim} />
      <ClientMarquee clients={clients} label="Trabajé con →" />
      <Services services={services} />
      <BusinessDiagnostic content={businessDiagnostic} />
      <Portfolio items={portfolioItems} />
      <Process steps={processSteps} />
      <Contact links={contactLinks} />
      <Footer />
    </main>
  );
}
