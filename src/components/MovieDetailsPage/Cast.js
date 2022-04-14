import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/moves-api";
import {
  CastList,
  CastItem,
  Photo,
  Name,
  Character,
} from "./MovieDedetails.styled";
function Cast() {
  let { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getCast(movieId)
      .then((data) => {
        setActors(data.cast);
      })
      .catch((error) => console.warn(error));
  }, [movieId]);

  return (
    <div>
      {actors && (
        <CastList>
          {actors.map((actor) => (
            <CastItem key={actor.id}>
              <Photo
                src={`${
                  actor.profile_path
                    ? "http://image.tmdb.org/t/p/original" + actor.profile_path
                    : "https://pomogaetsrazu.ru/images/offers/2829219234.jpg"
                }`}
                alt={actor.name}
              />
              <Name>{actor.original_name}</Name>
              <Character>Character: {actor.character}</Character>
            </CastItem>
          ))}
        </CastList>
      )}
    </div>
  );
}
export default Cast;
