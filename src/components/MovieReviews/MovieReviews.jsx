import { useState, useEffect } from "react";
import { getMovieRewiews } from "../../moviesAPI";
import { useOutletContext } from "react-router-dom";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useOutletContext();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getMovieRewiews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
