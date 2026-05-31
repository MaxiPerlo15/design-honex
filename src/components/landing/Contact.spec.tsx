import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Contact } from "./Contact";
import { contactLinks } from "@/data/landing";

describe("Contact", () => {
  it("renders the final WhatsApp destination without placeholders", () => {
    render(<Contact links={contactLinks} />);

    expect(screen.queryByText(/pendiente/i)).not.toBeInTheDocument();

    const whatsappLink = screen.getByRole("link", { name: /whatsapp/i });

    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/543533432075");
    expect(screen.getByText("+54 353 343 2075")).toBeInTheDocument();
  });
});
