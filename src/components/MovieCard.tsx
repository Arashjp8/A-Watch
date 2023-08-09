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
        onClick={() => navigate(`/movies/:${movie.id}`)}
        className={`${styleProp} group cursor-pointer relative w-52 h-[480px] flex flex-col items-center overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt="image"
          className="w-52 rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear absoloute h-[312px] object-cover"
        />
        <div className="absolute top-72 left-0 flex flex-col gap-3 h-[250px]">
          <VoteAverage movie={movie} />
          <span className="flex flex-col gap-1">
            <p className="text-md font-bold text-left max-w-[152px] group-hover:text-blue-400 transition-all duration-75 ease-linear">
              {movie.title}
            </p>
            <p className="text-sm text-left">{movie.release_date}</p>
          </span>
        </div>
      </div>
    );

  if (tvShow)
    return (
      <div
        onClick={() => navigate(`/movies/:${tvShow.id}`)}
        className={`${styleProp} group cursor-pointer relative w-52 h-[480px] flex flex-col items-center overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${tvShow.poster_path}`}
          alt="image"
          className="w-52 rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear absoloute h-[312px] object-cover"
        />
        <div className="absolute top-72 left-0 flex flex-col gap-3 h-[250px]">
          <VoteAverage tvShow={tvShow} />
          <span className="flex flex-col gap-1">
            <p className="text-md font-bold text-left max-w-[152px]  group-hover:text-blue-400 transition-all duration-75 ease-linear">
              {tvShow.name}
            </p>
            <p className="text-sm text-left">{tvShow.first_air_date}</p>
          </span>
        </div>
      </div>
    );
  else return <div></div>;
};

export default MovieCard;
