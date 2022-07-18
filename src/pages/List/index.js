import api from "../../services/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const listPokemons = () => {
    api.get("pokemon").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    listPokemons();
  }, []);
  return (
    <main>
      {!loading ? (
        <div>
          <div className="container">
            {console.log(data)}
            <div className="row">
              {data && data.results ? (
                data.results.map((item) => (
                  <>
                    <div className="col-md-4" key={item.name}>
                      <h4 className="text-center">{item.name}</h4>
                      <Link
                        to={`/Detail/${item.name}`}
                        className="btn btn-info w-100"
                      >
                        Details
                      </Link>
                    </div>
                  </>
                ))
              ) : (
                <p>no data</p>
              )}
            </div>
            <button className="btn btn-primary w-100 mt-5">Load more </button>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </main>
  );
}

export default List;
