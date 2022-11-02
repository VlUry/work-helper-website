import { useState } from "react";
import SearchResult from "./SearchResults";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="search_container">
      <input
        className="search"
        placeholder="Поиск..."
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      {inputFocused && inputValue.trim() && (
        <SearchResult input={inputValue.trim().toLowerCase()} />
      )}
    </div>
  );
};

export default Search;
