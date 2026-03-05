import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  // Add your tests here
  test("should render correctly", () => {
    // Test implementation
    const { container } = render(
      <SearchBar onQuery={() => {}} placeholder={""} />,
    );
    expect(container).toMatchSnapshot();
  });
  test("should call onQuery with the correct value", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} placeholder={""} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    // await new Promise((r) => setTimeout(r, 800));
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });
  test("should call onQuery when clicked button 'Enter'", () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} placeholder={""} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onQuery).toHaveBeenCalledWith("test");
  });
});
