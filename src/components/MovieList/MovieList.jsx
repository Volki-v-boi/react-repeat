import { Link, useLocation } from "react-router-dom";

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
            <h1>{movie.title}</h1>
          </Link>
        );
      })}
    </ul>
  );
}
