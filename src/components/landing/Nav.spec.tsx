import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Nav } from "./Nav";

vi.mock("next/image", () => ({
  default: () => <span data-testid="next-image-mock" />,
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("Nav", () => {
  it("renders the diagnostic navigation link", () => {
    render(
      <Nav
        logoSrc="/logo.png"
        logoAlt="Logo"
        links={[
          { label: "Servicios", href: "#servicios" },
          { label: "Diagnóstico", href: "#diagnostico" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Hablemos", href: "#contacto", emphasis: true },
        ]}
      />,
    );

    const diagnosticLink = screen.getAllByRole("link", { name: /diagnóstico/i })[0];
    const contactLink = screen.getAllByRole("link", { name: /hablemos/i })[0];

    expect(diagnosticLink).toHaveAttribute("href", "#diagnostico");
    expect(contactLink).toHaveAttribute("href", "#contacto");
  });
});
