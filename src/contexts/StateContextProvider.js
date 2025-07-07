import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const getResults = async (url) => {
    setLoading(true);
    setError(null);

    // Debug: Log API key presence (do not log the actual key in production)
    if (!process.env.REACT_APP_API_KEY) {
      console.error('API key is missing! Please set REACT_APP_API_KEY in your .env file.');
      setError('API key is missing! Please set REACT_APP_API_KEY in your .env file and restart the dev server.');
      setLoading(false);
      setResults([]);
      return;
    }

    try {
      const fullUrl = `${baseUrl}${url}`;
      const headers = {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      };
      console.log('Fetching from URL:', fullUrl);
      console.log('Request headers:', headers);

      const res = await fetch(fullUrl, {
        method: 'GET',
        headers,
      });

      console.log('Response status:', res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
      }

      const data = await res.json();
      console.log('API Response:', data);

      if (data.results && Array.isArray(data.results)) {
        setResults(data.results);
      } else if (data.entries && Array.isArray(data.entries)) {
        setResults(data.entries); // For news results
      } else if (data.image_results && Array.isArray(data.image_results)) {
        setResults(data.image_results); // For image results
      } else {
        console.error('Unexpected data structure:', data);
        setError('Received unexpected data structure from API');
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
      setError(`An error occurred while fetching results: ${error.message}`);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading, error }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);