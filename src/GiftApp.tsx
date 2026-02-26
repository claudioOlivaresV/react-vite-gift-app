import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviosSearches";
import { mockGifs } from "./mock-data/gift.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GiftApp = () => {
  const [searches, setSearches] = useState<string[]>(["gif 1"]);
  const handleTermClicked = (term: string) => {
    console.log("Term clicked:", term);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        subtitle="Encuentra tu gif favorito 👀"
      />
      <SearchBar placeholder="Buscar gif..." />
      <PreviousSearches
        searches={searches}
        onLabelClicked={handleTermClicked}
      />
      <GifList gif={mockGifs} />
    </>
  );
};
