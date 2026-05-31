import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "./Hero";
import { hero } from "@/data/landing";

describe("Hero", () => {
  it("keeps the heading semantically readable", () => {
    render(<Hero hero={hero} />);

    const heading = screen.getByRole("heading", { level: 1, name: "Tu marca no es invisible." });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent?.replace(/\s+/g, " ").trim()).toBe("Tu marca no es invisible.");
  });
});
