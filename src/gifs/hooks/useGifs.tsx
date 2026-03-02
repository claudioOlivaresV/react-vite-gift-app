import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gifs.response";
import { getGitsByQuery } from "../actions/get-gits-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};
export const useGifs = () => {
  const [searches, setSearches] = useState<string[]>(["gif 1"]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    console.log("Term clicked:", term);
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGitsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  };
  const handleSearch = async (term: string) => {
    term = term.trim().toLocaleLowerCase();
    if (term.length === 0) return;
    if (searches.includes(term)) return;
    const currenTems = searches.slice(0, 6);
    setSearches([term, ...currenTems].slice(0, 7));
    const gifs = await getGitsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
    console.log(gifs);
  };

  return {
    searches,
    gifs,
    handleSearch,
    handleTermClicked,
  };
};
