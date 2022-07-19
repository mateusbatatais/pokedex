import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=9"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
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
