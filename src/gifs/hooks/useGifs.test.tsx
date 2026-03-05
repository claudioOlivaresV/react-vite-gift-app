import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";

describe("useGifs", () => {
  // Add your tests here
  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());
    expect(result.current.gifs).toEqual([]);
    expect(result.current.searches).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });
  test("should return list of gifs", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("funny cats");
    });
    expect(result.current.gifs.length).toBe(10);
  });
  test("should return list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleTermClicked("funny cats");
    });
    expect(result.current.gifs.length).toBe(10);
  });
  test("should return list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleTermClicked("funny cats");
    });
    await act(async () => {
      await result.current.handleTermClicked("funny cats");
    });
    expect(result.current.gifs.length).toBe(10);
  });
});
