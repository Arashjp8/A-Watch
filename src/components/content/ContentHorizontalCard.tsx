import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useSelectedIconStore } from "../sidebar/store";
import { isMovie } from "./ContentVerticalCard";
import useSelectedContentId from "./store";
import Gauge from "../gauge/Gauge";
import useIsHoveredStore from "../gauge/store";
import ImageComponent from "../ImageComponent";

interface Props {
  data: Movie | TvShow;
  width: string;
  searchPage: boolean;
  styleProp?: string;
}

const ContentHorizontalCard = ({
  data,
  styleProp,
  width,
  searchPage,
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
      className={`${styleProp} group relative mb-10 ${
        searchPage ? "h-[180px]" : "h-[380px]"
      } ${width} cursor-pointer overflow-hidden sm:w-72 xl:h-[400px] xl:w-[580px]`}
    >
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        className="absolute z-0 h-[85%] w-full rounded-3xl object-cover transition-all duration-150 ease-linear group-hover:rounded-xl"
      />
      <div className="absolute flex h-[85%] w-full flex-row gap-3 rounded-3xl bg-gradient-to-t from-black transition-all duration-150 ease-linear group-hover:rounded-xl"></div>
      <div
        className={`absolute ${
          searchPage ? "bottom-0" : "bottom-12"
        } left-0 flex items-center gap-5 xl:gap-10`}
      >
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt={data && isMovie(data) ? data?.title : data?.name}
          className={`${
            searchPage ? "min-w-24 max-w-24 w-24" : "min-w-28 max-w-28 w-28"
          } h-[60%] min-h-[60%] rounded-3xl border-[1px] border-blue-400 object-cover md:w-32`}
        />
        <section
          className={`${searchPage ? "mb-5" : ""} flex flex-col gap-1 xl:gap-3`}
        >
          <div className="hidden xl:block">
            <Gauge data={data} size={2} />
          </div>
          <div className="block xl:hidden">
            <Gauge data={data} size={1} />
          </div>
          <span className="mb-4 mr-2 flex flex-col gap-1 xl:mb-10">
            <h4 className="max-w-[320px] text-left text-sm font-bold transition-all duration-75 ease-linear group-hover:text-blue-400 sm:text-base xl:text-2xl">
              {isMovie(data) ? data.title : data.name}
            </h4>
            <p className="text-left text-sm text-white/60 xl:text-lg">
              {isMovie(data) ? data.release_date : data.first_air_date}
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};

export default ContentHorizontalCard;
