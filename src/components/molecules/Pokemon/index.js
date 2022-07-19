import { Link } from "react-router-dom";

function Pokemon({ img1, img2, name, exp }) {
  return (
    <article className="text-center">
      <div className="d-flex justify-content-center">
        <img src={img1} alt={name} />
        <img src={img2} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>Base experience: {exp}</p>
      <Link to="/" className="btn btn-info w-100">
        Go back
      </Link>
    </article>
  );
}

export default Pokemon;
