import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useSelectedIconStore } from "../sidebar/store";
import useSelectedContentId from "./store";
import Gauge from "../gauge/Gauge";
import useIsHoveredStore from "../gauge/store";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

export const isMovie = (data: Movie | TvShow): data is Movie => {
  return (data as Movie).title !== undefined;
};

const ContentVerticalCard = ({ data, styleProp }: Props) => {
  const { setHovered } = useIsHoveredStore();
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styleProp} group relative mb-5 flex h-[340px] w-28 cursor-pointer flex-col items-start overflow-hidden md:h-[480px] md:w-52 md:items-center`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
        alt="image"
        className="absoloute h-[50%] w-full rounded-3xl object-cover transition-all duration-150 ease-linear group-hover:rounded-xl md:h-[312px] md:w-full"
      />
      <div className="absolute left-0 top-36 flex h-[250px] flex-col gap-3 md:top-72">
        <Gauge data={data} size="w-10 h-10" />
        <span className="flex flex-col gap-1">
          <p className="max-w-[152px] text-left text-sm font-bold transition-all duration-75 ease-linear group-hover:text-blue-400 md:text-lg">
            {isMovie(data) ? data.title : data.name}
          </p>
          <p className="text-left text-sm text-white/60">
            {isMovie(data) ? data.release_date : data.first_air_date}
          </p>
        </span>
      </div>
    </div>
  );
};

export default ContentVerticalCard;
