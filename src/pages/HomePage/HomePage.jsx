import { useEffect, useState } from "react";
import { getMovies } from "../../moviesAPI";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
