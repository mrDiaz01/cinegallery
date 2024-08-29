import { Link } from "react-router-dom";
import PlaceHolder from "../assets/posterplaceholder.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : PlaceHolder;

  return (
    <div className="max-w-sm bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:hover:bg-gray-700 hover:bg-gray-100 hover:-translate-y-2 duration-300 ease-in-out  dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
