import axios from "axios";

export const FetchMovie = axios.get(
  "https://yts.mx/api/v2/list_movies.json?quality=3D"
);
