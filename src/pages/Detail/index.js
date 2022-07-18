import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  let { name } = useParams();
  const listPokemons = () => {
    api.get(`pokemon/${name}`).then((response) => {
      setPokemon(response.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    listPokemons();
  }, []);
  return (
    <article>
      {!loading ? (
        <>
          <div className="container">
            {pokemon ? (
              <article>
                <img src={pokemon.sprites.front_default} />
                <h2>{pokemon.name}</h2>
                <Link to="/" className="btn btn-info w-100">
                  Go back
                </Link>{" "}
              </article>
            ) : (
              <p>no pokemon</p>
            )}
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </article>
  );
}

export default Detail;
