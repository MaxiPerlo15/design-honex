import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import Home from "./page";

vi.mock("@/components/landing/AnimationEffects", () => ({
  AnimationEffects: () => <div data-testid="animation-effects" />,
}));

vi.mock("@/components/landing/Nav", () => ({
  Nav: () => <header data-testid="nav" />,
}));

vi.mock("@/components/landing/Hero", () => ({
  Hero: () => <section data-testid="hero">Hero</section>,
}));

vi.mock("@/components/landing/ProofClaim", () => ({
  ProofClaim: () => <section data-testid="proof-claim">ProofClaim</section>,
}));

vi.mock("@/components/landing/ServicesMarquee", () => ({
  ServicesMarquee: () => <section data-testid="services-marquee">ServicesMarquee</section>,
}));

vi.mock("@/components/landing/Services", () => ({
  Services: () => <section data-testid="services">Services</section>,
}));

vi.mock("@/components/landing/BusinessDiagnostic", () => ({
  BusinessDiagnostic: () => <section data-testid="diagnostic">Diagnostic</section>,
}));

vi.mock("@/components/landing/Portfolio", () => ({
  Portfolio: () => <section data-testid="portfolio">Portfolio</section>,
}));

vi.mock("@/components/landing/Process", () => ({
  Process: () => <section data-testid="process">Process</section>,
}));

vi.mock("@/components/landing/Contact", () => ({
  Contact: () => <section data-testid="contact">Contact</section>,
}));

vi.mock("@/components/landing/Footer", () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("Home page", () => {
  it("renders the diagnostic section before the process block", () => {
    render(<Home />);

    const diagnostic = screen.getByTestId("diagnostic");
    const process = screen.getByTestId("process");

    expect(diagnostic.compareDocumentPosition(process) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
