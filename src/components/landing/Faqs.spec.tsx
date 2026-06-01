import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Faqs } from "./Faqs";
import { faqs } from "@/data/landing";

describe("Faqs", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the section with five FAQ titles", () => {
    const { container } = render(<Faqs items={faqs} />);

    expect(container.querySelector("section#faqs")).toBeInTheDocument();

    const list = within(screen.getByTestId("faqs-list"));
    expect(list.getAllByRole("button")).toHaveLength(5);
  });

  it("toggles a single accordion item at a time", () => {
    render(<Faqs items={faqs} />);

    const list = within(screen.getByTestId("faqs-list"));
    const buttons = list.getAllByRole("button");

    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(buttons[1]);
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
  });

  it("resets the open item when the mobile header collapses the list", () => {
    render(<Faqs items={faqs} />);

    const header = screen.getByRole("button", { name: "¿Tenés dudas?" });
    const listRoot = screen.getByTestId("faqs-list");
    const list = within(listRoot);

    expect(header).toHaveAttribute("aria-expanded", "false");
    expect(listRoot).toHaveAttribute("data-mobile-state", "closed");

    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-expanded", "true");
    expect(listRoot).toHaveAttribute("data-mobile-state", "open");

    const firstQuestion = list.getAllByRole("button")[0];
    fireEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-expanded", "false");
    expect(listRoot).toHaveAttribute("data-mobile-state", "closed");
    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });
});
