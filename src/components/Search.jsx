import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useStateContext } from "../contexts/StateContextProvider";
import Links from "./Links";

// superman, as individual typing a new letter. a new request of each letters will be on
// 300ml second for light

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm } = useStateContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue, setSearchTerm]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <label htmlFor="search-input" className="sr-only">Search</label>
      <div className="relative w-full max-w-xl">
        <input
          id="search-input"
          value={text}
          type="text"
          className="w-full h-12 dark:bg-gray-200 border rounded-full shadow-sm outline-none px-6 pr-12 text-black hover:shadow-lg focus:ring-2 focus:ring-blue-400 transition"
          placeholder="🔎 Search Google or type URL"
          onChange={(e) => setText(e.target.value)}
          autoComplete="off"
        />
        {text !== "" && (
          <button
            type="button"
            className="absolute top-2 right-4 text-xl text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition"
            onClick={() => setText("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <Links />
    </div>
  );
};

export default Search;
