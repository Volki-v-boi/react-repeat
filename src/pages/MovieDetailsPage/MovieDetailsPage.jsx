import { Suspense, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../moviesAPI";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? "/";

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieID);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMovie();
  }, [movieID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <ul>
        <li>
          <NavLink to="cast" state={{ from: backLink }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: backLink }}>
            MovieReviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet context={{ movieId: movieID }} />
      </Suspense>
    </div>
  );
}
