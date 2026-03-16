import { useEffect, useState } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { getMoviesByQuery } from "../../moviesAPI";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    async function fetchMovieByQuery() {
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieByQuery();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.query.value.trim();

    if (value === "") return;

    setSearchParams({ query: value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
