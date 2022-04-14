import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  MovieInformation,
  Wrapper,
  InfoWrapper,
} from "./MovieDedetails.styled";
function MovieInfo({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  const userScore = Math.round((`${movie.vote_average}` * 100) / 10);
  const year = movie.release_date.substring(0, 4);

  return (
    <>
      <MovieInformation>
        <Wrapper>
          <Button
            type="button"
            onClick={() => navigate(location?.state?.from ?? "/")}
          >
            Go back
          </Button>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width="250px"
          />
        </Wrapper>
        <InfoWrapper>
          <h2>
            {movie.title} ({year})
          </h2>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <p>
            <b>User Score:</b> {userScore}%
          </p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </InfoWrapper>
      </MovieInformation>
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
}
MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
