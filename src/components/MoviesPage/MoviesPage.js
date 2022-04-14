import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getMovies } from "../../services/moves-api";
import { SearchForm } from "../SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuery = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    if (currentQuery === null) {
      return;
    }
    getMovies(currentQuery).then((data) => {
      if (data.results.length === 0) {
        return alert("Not found!");
      }
      setMovies(data.results);
    });
  }, [currentQuery, movieName]);
  function submitForm(query) {
    if (query === "") {
      return alert("Please, enter a text!");
    }

    setMovieName(query);

    navigate({ ...location, search: `query=${query}` });
  }

  return (
    <>
      <SearchForm onSubmit={submitForm} />
      {movies && (
        <ul>
          {movies.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
