import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../services/moves-api";
function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>
                {title} {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomePage;
