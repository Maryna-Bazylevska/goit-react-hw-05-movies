import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import { getMovieDetails } from "../../services/moves-api";
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (movie === null) {
    return <div>NOT FOUND</div>;
  } else {
    return <MovieInfo movie={movie} />;
  }
}
export default MovieDetailsPage;
