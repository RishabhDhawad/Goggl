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

    try {
      console.log('Fetching from URL:', `${baseUrl}${url}`);
      
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        },
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