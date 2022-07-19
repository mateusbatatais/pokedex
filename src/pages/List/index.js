import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function List() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=9"
  );

  const getAllPokemons = async () => {
    api.get(loadMore).then((response) => {
      const data = response.data;
      setLoadMore(data.next);
      createPokemonObject(data.results);
    });

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        api.get(`pokemon/${pokemon.name}`).then((response) => {
          const data = response.data;
          setAllPokemons((currentList) => [...currentList, data]);
        });
      });
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <main>
      <div>
        <div className="container">
          <div className="row">
            {allPokemons ? (
              allPokemons.map((pokemon) => (
                <div className="col-md-4 text-center" key={pokemon.id}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <h4 className="text-center">{pokemon.name}</h4>
                  <Link
                    to={`/Detail/${pokemon.name}`}
                    className="btn btn-info w-100"
                  >
                    Details
                  </Link>
                </div>
              ))
            ) : (
              <p>no data</p>
            )}
          </div>
          <button
            className="btn btn-primary w-100 mt-5"
            onClick={() => getAllPokemons()}
          >
            Load more
          </button>
        </div>
      </div>
    </main>
  );
}

export default List;
