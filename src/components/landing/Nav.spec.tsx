import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Nav } from "./Nav";

vi.mock("next/image", () => ({
  default: () => <span data-testid="next-image-mock" />,
}));

afterEach(() => {
  vi.clearAllMocks();
});

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Hablemos", href: "#contacto", emphasis: true },
] as const;

describe("Nav", () => {
  it("renders the diagnostic navigation link", () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    const diagnosticLink = screen.getAllByRole("link", { name: /diagnóstico/i })[0];
    const contactLink = screen.getAllByRole("link", { name: /hablemos/i })[0];

    expect(diagnosticLink).toHaveAttribute("href", "#diagnostico");
    expect(contactLink).toHaveAttribute("href", "#contacto");
  });

  it("renders the hamburger button on mobile", () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    expect(screen.getAllByRole("button", { name: /abrir menú/i })[0]).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    const openButton = screen.getAllByRole("button", { name: /abrir menú/i })[0];
    fireEvent.click(openButton);

    const dialog = screen.getAllByRole("dialog", { name: /menú de navegación/i })[0];
    expect(dialog).toBeInTheDocument();
    expect(document.body.classList.contains("nav-menu-open")).toBe(true);

    fireEvent.click(within(dialog).getByRole("button", { name: /^cerrar$/i }));
    expect(screen.queryByRole("dialog", { name: /menú de navegación/i })).not.toBeInTheDocument();
    expect(document.body.classList.contains("nav-menu-open")).toBe(false);
  });

  it("shows all navigation links inside the menu", () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    fireEvent.click(screen.getAllByRole("button", { name: /abrir menú/i })[0]);
    const dialog = screen.getAllByRole("dialog", { name: /menú de navegación/i })[0];
    const menu = within(dialog);

    expect(menu.getByRole("link", { name: /servicios/i })).toHaveAttribute("href", "#servicios");
    expect(menu.getByRole("link", { name: /diagnóstico/i })).toHaveAttribute("href", "#diagnostico");
    expect(menu.getByRole("link", { name: /portfolio/i })).toHaveAttribute("href", "#portfolio");
    expect(menu.getByRole("link", { name: /proceso/i })).toHaveAttribute("href", "#proceso");
    expect(menu.getByRole("link", { name: /^hablemos/i })).toHaveAttribute("href", "#contacto");
  });

  it("closes the menu when clicking a link", async () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    fireEvent.click(screen.getAllByRole("button", { name: /abrir menú/i })[0]);
    const dialog = screen.getAllByRole("dialog", { name: /menú de navegación/i })[0];
    fireEvent.click(within(dialog).getByRole("link", { name: /servicios/i }));

    await waitFor(() => {
      expect(document.body.classList.contains("nav-menu-open")).toBe(false);
    });
  });

  it("closes the menu with Escape", () => {
    render(<Nav logoSrc="/logo.png" logoAlt="Logo" links={[...navLinks]} />);

    fireEvent.click(screen.getAllByRole("button", { name: /abrir menú/i })[0]);
    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: /menú de navegación/i })).not.toBeInTheDocument();
  });
});
