import { useEffect, useState } from "react";

interface Props {
  placeholder: string;
  onQuery: (term: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const interval = setTimeout(() => {
      onQuery(query);
    }, 700);
    return () => {
      clearTimeout(interval);
    };
  }, [query]);

  const handleSearch = () => {
    onQuery(query);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
