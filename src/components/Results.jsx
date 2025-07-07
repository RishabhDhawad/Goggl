import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/StateContextProvider";
import Loading from "./Loading";
import SearchResults from "./SearchResults";
import ImageResults from "./ImageResults";
import NewsResults from "./NewsResults";
import VideoResults from "./VideoResults";

export const Results = () => {
  const { results, loading, getResults, searchTerm, error } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname, getResults]);

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!results || results.length === 0) return <div className="text-center">No results found</div>;

  switch (location.pathname) {
    case '/search':
      return <SearchResults results={results} />;
    case '/images':
      return <ImageResults results={results} />;
    case '/news':
      return <NewsResults results={results} />;
    case '/videos':
      return <VideoResults results={results} />;
    default:
      return 'Error';
  }
};

export default Results;
