import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useSelectedIconStore } from "../sidebar/store";
import useSelectedContentId from "./store";
import Gauge from "../Gauge";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

export const isMovie = (data: Movie | TvShow): data is Movie => {
  return (data as Movie).title !== undefined;
};

const ContentVerticalCard = ({ data, styleProp }: Props) => {
  const navigate = useNavigate();
  const { changeSelectedContentId, isAMovie, isATvShow } =
    useSelectedContentId();
  const { setSelectedIcon } = useSelectedIconStore();

  return (
    <div
      onClick={() => {
        if (isMovie(data)) {
          navigate(`/movies/:${data.id}`);
          changeSelectedContentId(data.id);
          isAMovie();
          setSelectedIcon("Movies");
        } else if (!isMovie(data)) {
          navigate(`/tvshows/:${data.id}`);
          changeSelectedContentId(data.id);
          isATvShow();
          setSelectedIcon("Tv Shows");
        }
      }}
      className={`${styleProp} group cursor-pointer relative w-36 md:w-52 h-[370px] md:h-[480px] flex flex-col items-start md:items-center overflow-hidden`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
        alt="image"
        className="w-36 md:w-full h-[212px] md:h-[312px] rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear absoloute object-cover"
      />
      <div className="absolute top-48 md:top-72 left-0 flex flex-col gap-3 h-[250px]">
        <Gauge data={data} size="w-10 h-10" />
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

export default ContentVerticalCard;
