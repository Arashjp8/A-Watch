import { useNavigate } from "react-router-dom";
import { Movie, TvShow } from "../pages/Home";
import VoteAverage from "./VoteAverage";

interface Props {
  movie?: Movie;
  tvShow?: TvShow;
  styleProp?: string;
}
const MovieCard = ({ movie, tvShow, styleProp }: Props) => {
  const navigate = useNavigate();

  if (movie)
    return (
      <div
        key={movie.id}
        className={`${styleProp} group relative card overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt="image"
          className="group-hover:scale-110 group-hover:rotate-3 overflow-hidden transition duration-1000 ease-linear w-full  h-full rounded-3xl absoloute"
        />
        <div className="group-hover:scale-100 card-title transition-opacity">
          <span className="flex flex-col gap-5">
            <p className="text-md font-bold  mt-10 text-center pt-2 px-4">
              {movie.title}
            </p>
            <p className="text-sm text-center px-4">
              Release Date: {movie.release_date}
            </p>
          </span>
          <div className="flex flex-col gap-5 justify-center items-center">
            <VoteAverage movie={movie} />
            <button
              onClick={() => navigate(`/movies/:${movie.id}`)}
              className="bg-blue-700 text-white hover:bg-white hover:text-blue-600 font-medium transition-all duration-150 ease-linear text-md px-4 py-2 rounded-3xl hover:rounded-xl mb-10"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    );

  if (tvShow)
    return (
      <div
        key={tvShow.id}
        className={`${styleProp} group relative card overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${tvShow.poster_path}`}
          alt="image"
          className="group-hover:scale-110 group-hover:rotate-3 overflow-hidden transition duration-1000 ease-linear w-full  h-full rounded-3xl absoloute"
        />
        <div className="group-hover:scale-100 card-title transition-opacity">
          <span className="flex flex-col gap-5">
            <p className="text-md font-bold  mt-10 text-center pt-2 px-4">
              {tvShow.name}
            </p>
            <p className="text-sm text-center px-4">
              First Air Date: {tvShow.first_air_date}
            </p>
          </span>
          <div className="flex flex-col gap-5 justify-center items-center">
            <VoteAverage tvShow={tvShow} />
            <button
              onClick={() => navigate(`/tvshows/:${tvShow.id}`)}
              className="bg-blue-700 text-white hover:bg-white hover:text-blue-600 font-medium transition-all duration-150 ease-linear text-md px-4 py-2 rounded-3xl hover:rounded-xl mb-10"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default MovieCard;
