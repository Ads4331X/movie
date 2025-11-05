import { useEffect, useState } from "react";
import { FetchMovie } from "../api/movieapi";

export function useMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      let response = await FetchMovie;
      setMovies(response.data.data.movies);
    }
    fetchMovies();
  }, []);
  return {
    movies,
  };
}
