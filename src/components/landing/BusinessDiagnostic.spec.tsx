import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BusinessDiagnostic } from "./BusinessDiagnostic";
import { businessDiagnostic } from "@/data/landing";

afterEach(() => {
  vi.useRealTimers();
  cleanup();
});

describe("BusinessDiagnostic", () => {
  it("renders the four stage options and the initial prompt", () => {
    render(<BusinessDiagnostic content={businessDiagnostic} />);

    expect(screen.getByText(/elegí una etapa para ver la lectura/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(4);
    expect(screen.getByRole("button", { name: /recién arrancando/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ya estoy rodando/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /negocio establecido/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /quiero escalar/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /hablemos por whatsapp/i })).not.toBeInTheDocument();
  });

  it("shows the matching diagnostic block when a stage is selected", () => {
    vi.useFakeTimers();
    render(<BusinessDiagnostic content={businessDiagnostic} />);

    fireEvent.click(screen.getAllByRole("button", { name: /negocio establecido/i })[0]);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText(/¿dónde está el cuello de botella\?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contenido sin impacto/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /no llego a nuevos clientes/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /hablemos por whatsapp/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /volver a empezar/i })).not.toBeInTheDocument();
  });

  it("builds the WhatsApp URL with the selected stage and the final destination number", () => {
    vi.useFakeTimers();
    render(<BusinessDiagnostic content={businessDiagnostic} />);

    fireEvent.click(screen.getAllByRole("button", { name: /quiero escalar/i })[0]);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    fireEvent.click(screen.getByRole("button", { name: /todo en uno/i }));
    act(() => {
      vi.advanceTimersByTime(300);
    });

    const link = screen.getByRole("link", { name: /hablemos de esto por whatsapp/i });
    const href = link.getAttribute("href");

    expect(href).toContain("https://wa.me/543533432075?text=");

    const url = new URL(href ?? "");
    const message = decodeURIComponent(url.searchParams.get("text") ?? "");

    expect(message).toContain('Hola, estoy en la etapa "Quiero escalar".');
    expect(message).toContain('Me interesa "Todo en uno".');
    expect(message).toContain("Quiero conversar sobre: todo integrado.");
  });

  it("returns to the initial state when reset is clicked", () => {
    vi.useFakeTimers();
    render(<BusinessDiagnostic content={businessDiagnostic} />);

    fireEvent.click(screen.getAllByRole("button", { name: /quiero escalar/i })[0]);
    act(() => {
      vi.advanceTimersByTime(300);
    });
    fireEvent.click(screen.getByRole("button", { name: /todo en uno/i }));
    act(() => {
      vi.advanceTimersByTime(300);
    });
    fireEvent.click(screen.getByRole("button", { name: /volver a empezar/i }));

    expect(screen.getByText(/elegí una etapa para ver la lectura/i)).toBeInTheDocument();
    expect(screen.queryByText(/acciones sugeridas/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /volver a empezar/i })).not.toBeInTheDocument();
  });
});
