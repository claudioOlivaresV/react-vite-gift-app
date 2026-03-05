import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gifs.response";
import giphyApi from "../api/giphy.api";

export const getGitsByQuery = async (query: string): Promise<Gif[]> => {
  if (query.trim().length === 0) {
    return [];
  }
  try {
    const response = await giphyApi.get<GiphyResponse>(`/search`, {
      params: {
        q: query,
        limit: 10,
      },
    });
    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: parseInt(gif.images.original.width, 10),
      height: parseInt(gif.images.original.height, 10),
    }));
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
};
