import { describe, test, expect, vi } from "vitest";
import { giphyResponseMockData } from "../../../test/mock/giphy.response.mock.data";
import AxiosMockAdapter from "axios-mock-adapter";
import giphyApi from "../api/giphy.api";
import { getGitsByQuery } from "./get-gits-by-query.action";
import { beforeEach } from "vitest";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);
  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });
  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphyResponseMockData);
    const gifs = await getGitsByQuery("funny cats");
    gifs.forEach((gif) => {
      expect(gif).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      });
    });
  });
  test("should return an empty list of gifs if query is empty", async () => {
    // mock.onGet("/search").reply(200, {data: []});

    mock.restore();
    const gifs = await getGitsByQuery("");
    expect(gifs.length).toBe(0);
  });
  test("should handle error when the API response errors", async () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {
      console.log("error");
    });
    mock.onGet("/search").reply(400, { data: { message: "bad" } });
    const gifs = await getGitsByQuery("funny cats");
    expect(gifs.length).toBe(0);
    expect(spy).toHaveBeenCalledWith("Error fetching gifs:", expect.any(Error));
    spy.mockRestore();
  });
});
