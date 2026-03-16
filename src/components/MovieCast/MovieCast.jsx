import { useEffect, useState } from "react";
import { getMovieCredits } from "../../moviesAPI";
import { useOutletContext } from "react-router-dom";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fethMovieCredits() {
      try {
        const data = await getMovieCredits(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fethMovieCredits();
  }, [movieId]);

  return (
    <ul>
      {casts.map((cast) => {
        return (
          <li key={cast.id}>
            <p>{cast.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
