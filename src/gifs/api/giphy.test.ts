import { describe, expect, test } from "vitest";
import giphyApi from "./giphy.api";

describe("Giphy API", () => {
  test("should be configured correctly", async () => {
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(giphyApi.defaults.params.lang).toBe("en");
  });
});
