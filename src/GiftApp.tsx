import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviosSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GiftApp = () => {
  const { searches, gifs, handleSearch, handleTermClicked } = useGifs();

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
