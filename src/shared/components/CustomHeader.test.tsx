import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe("CustomHeader", () => {
  const title = "Test Title";

  // Test implementation
  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    screen.debug();
    expect(screen.getByText(title)).toBeDefined();
  });
  test("should render the subtitle correctly", () => {
    const subtitle = "Test Subtitle";
    render(<CustomHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(subtitle)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(subtitle);
  });
  test("should not render description with not provider", () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector(".content-center");
    const h1 = divElement?.querySelector("h1");
    const p = divElement?.querySelector("p");
    screen.debug();
    expect(h1?.innerHTML).toBe(title);
    expect(p?.innerHTML).toBe("");
  });
});
