import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cache = new Map();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const retryDelay = 5000; // Increase to 5 seconds

  const getResults = async (type) => {
    setLoading(true);
    const url = `${baseUrl}${type}`;

    // Check cache first
    if (cache.has(url)) {
      setResults(cache.get(url));
      setLoading(false);
      return;
    }

    let retries = 3;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (retries > 0) {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
          },
        });

        if (response.status === 429) {
          console.log(
            `Rate limited. Retrying in ${
              retryDelay / 1000
            } seconds... (${retries} retries left)`
          );
          await delay(retryDelay);
          retries--;
          continue;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);

        // If successful, cache the result
        cache.set(url, data);

        break; // Exit the loop if successful
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
        retries--;
        if (retries === 0) {
          // Handle the error (e.g., show an error message to the user)
        }
      }
    }

    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
