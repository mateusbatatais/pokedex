import api from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../../components/molecules/Pokemon";

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
              <Pokemon
                key={pokemon.id}
                img1={pokemon.sprites.front_default}
                img2={pokemon.sprites.back_default}
                exp={pokemon.base_experience}
                name={pokemon.name}
              />
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
