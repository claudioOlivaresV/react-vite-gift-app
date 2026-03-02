import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviosSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGitsByQuery } from "./gifs/actions/get-gits-by-query.action";
import type { Gif } from "./gifs/interfaces/gifs.response";

export const GiftApp = () => {
  const [searches, setSearches] = useState<string[]>(["gif 1"]);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const handleTermClicked = (term: string) => {
    console.log("Term clicked:", term);
  };
  const handleSearch = async (term: string) => {
    term = term.trim().toLocaleLowerCase();
    if (term.length === 0) return;
    if (searches.includes(term)) return;
    const currenTems = searches.slice(0, 6);
    setSearches([term, ...currenTems].slice(0, 7));
    const gifs = await getGitsByQuery(term);
    setGifs(gifs);
    console.log(gifs);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        subtitle="Encuentra tu gif favorito 👀"
      />
      <SearchBar placeholder="Buscar gif..." onQuery={handleSearch} />
      <PreviousSearches
        searches={searches}
        onLabelClicked={handleTermClicked}
      />
      <GifList gif={gifs} />
    </>
  );
};
