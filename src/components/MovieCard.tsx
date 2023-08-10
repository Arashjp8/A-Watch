import { useNavigate } from "react-router-dom";
import { Movie, TvShow } from "../pages/Home";
import VoteAverage from "./VoteAverage";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

const isMovie = (data: Movie | TvShow): data is Movie => {
  return (data as Movie).title !== undefined;
};

const MovieCard = ({ data, styleProp }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movies/:${data.id}`)}
      className={`${styleProp} group cursor-pointer relative w-52 h-[480px] flex flex-col items-center overflow-hidden`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
        alt="image"
        className="w-52 rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear absoloute h-[312px] object-cover"
      />
      <div className="absolute top-72 left-0 flex flex-col gap-3 h-[250px]">
        <VoteAverage data={data} />
        <span className="flex flex-col gap-1">
          <p className="text-md font-bold text-left max-w-[152px] group-hover:text-blue-400 transition-all duration-75 ease-linear">
            {isMovie(data) ? data.title : data.name}
          </p>
          <p className="text-sm text-left text-white/60">
            {isMovie(data) ? data.release_date : data.first_air_date}
          </p>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
