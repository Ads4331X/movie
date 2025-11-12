import { useEffect, useState } from "react";
import { FetchMovie, FetchSuggestions } from "../api/movieapi";

export function useMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      let response = await FetchMovie;
      let details = await FetchSuggestions;
      setMovies(response.data.data.movies);
    }
    fetchMovies();
  }, []);
  return {
    movies,
  };
}
