import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { GiftApp } from "./GiftApp";

describe("GiftApp", () => {
  test("should render correctly", () => {
    // Test implementation
    const { container } = render(<GiftApp />);
    expect(container).toMatchSnapshot();
  });
});
