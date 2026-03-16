import axios from "axios";
const urlTranding = "https://api.themoviedb.org/3/trending/movie/day";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWI0OWY5NjhhNmI3NDQ0MWZlNGUwODA1ODg2OTE2NyIsIm5iZiI6MTcyMDk3NjQ1Mi4yNzgsInN1YiI6IjY2OTQwNDQ0OWI2ZmRmNmYxMTg5NjcyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVYvhfA0tubSZzcnknzeb59BgzREIXFNQK0s-DXtngY";
const options = { headers: { Authorization: `Bearer ${apiKey}` } };

export const getMovies = async () => {
  const response = await axios.get(urlTranding, options);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options,
  );
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options,
  );
  return response.data;
};

export const getMovieRewiews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options,
  );
  return response.data;
};

export const getMoviesByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      ...options,
      params: {
        query: query,
        page: 1,
      },
    },
  );

  return response.data;
};
