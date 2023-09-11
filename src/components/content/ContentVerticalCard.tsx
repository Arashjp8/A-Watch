import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import ImageComponent from "../ImageComponent";
import Gauge from "../gauge/Gauge";
import useIsHoveredStore from "../gauge/store";
import { useSelectedIconStore } from "../sidebar/store";
import useSelectedContentId from "./store";

interface Props {
  data: Movie | TvShow;
  size: string;
  detailTop: string;
  nameFontSize: string;
  marginBottom: string;
  styleProp?: string;
}

export const isMovie = (data: Movie | TvShow): data is Movie => {
  return (data as Movie).title !== undefined;
};

const ContentVerticalCard = ({
  data,
  styleProp,
  size,
  detailTop,
  nameFontSize,
  marginBottom,
}: Props) => {
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
      className={`${styleProp} group relative mx-1 overflow-hidden ${marginBottom} flex ${size} cursor-pointer flex-col items-start sm:mx-0 md:h-[480px] md:w-52 md:items-center`}
    >
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        className={`absoloute h-[50%] w-full rounded-3xl object-cover transition-all duration-150 ease-linear group-hover:rounded-xl md:h-[312px] md:w-full`}
      />
      <div
        className={`absolute left-0 ${detailTop} flex h-[250px] flex-col gap-3 md:top-72`}
      >
        <Gauge data={data} size={1} />
        <span className="flex flex-col gap-1">
          <p
            className={`max-w-[152px] text-left ${nameFontSize} font-bold transition-all duration-75 ease-linear group-hover:text-blue-400 md:text-lg`}
          >
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
