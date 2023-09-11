import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import ContentType from "../ContentType";
import Gauge from "../gauge/Gauge";
import { isMovie } from "../content/ContentVerticalCard";
import useSelectedContentId from "../content/store";
import { useSelectedIconStore } from "../sidebar/store";
import useIsHoveredStore from "../gauge/store";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

const SearchPageCard = ({ data, styleProp }: Props) => {
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
      className={`${styleProp} group relative h-[450px] w-full cursor-pointer overflow-hidden`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 50%)",
          maskImage: "linear-gradient(to right, transparent, black 50%)",
        }}
        className="absolute right-0 z-0 h-[380px] w-[70%] rounded-3xl object-cover transition-all duration-150 ease-linear group-hover:rounded-xl"
      />
      <div className="absolute z-10 flex h-[380px] w-full rounded-3xl bg-black/90 transition-all duration-150 ease-linear group-hover:rounded-xl group-hover:bg-black/80"></div>
      <div
        className={`absolute bottom-32 left-32 z-20 flex flex-row items-center justify-between gap-5 xl:gap-[46rem]`}
      >
        <div className="flex flex-row items-center gap-10">
          <img
            src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
            alt={data && isMovie(data) ? data?.title : data?.name}
            className="min-w-44 h-[282px] w-48 rounded-3xl object-cover"
          />
          <section className="flex flex-col gap-1 xl:gap-3">
            <span className="mb-2 flex flex-col gap-1 xl:mb-0">
              <h4 className="max-h-[96px] max-w-[170px] overflow-hidden text-left text-base font-bold transition-all  duration-75 ease-linear group-hover:text-blue-400 xl:text-2xl">
                {isMovie(data)
                  ? data.title.length > 25
                    ? data.title.slice(0, 25) + "..."
                    : data.title
                  : data.name.length > 25
                  ? data.name.slice(0, 25) + "..."
                  : data.name}
              </h4>
              <p className="text-left text-sm text-white/60 group-hover:text-white/90 xl:text-lg">
                {isMovie(data) ? data.release_date : data.first_air_date}
              </p>
            </span>
            <div className="flex items-center gap-5">
              <div className="hidden xl:block">
                <Gauge data={data} size={3} />
              </div>
              <div className="block xl:hidden">
                <Gauge data={data} size={1} />
              </div>
              <ContentType data={data} />
            </div>
          </section>
        </div>
        <div className="mx-5 hidden max-w-[200px] text-left text-sm font-semibold text-white/80 group-hover:text-blue-400 group-hover:shadow-2xl ssm:block xl:text-lg">
          <h5 className="font-bold">Overview:</h5>{" "}
          {data.overview && data.overview.slice(0, 100) + "..."}
        </div>
      </div>
    </div>
  );
};

export default SearchPageCard;
