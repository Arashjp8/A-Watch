import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import VoteAverage from "../VoteAverage";
import { isMovie } from "../content/ContentVerticalCard";
import useSelectedContentId from "../content/store";
import { useSelectedIconStore } from "../sidebar/store";
import ContentType from "../ContentType";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

const SearchPageCard = ({ data, styleProp }: Props) => {
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
      className={`${styleProp} group relative w-72 xl:w-full h-[450px] cursor-pointer overflow-hidden`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
        alt="backdrop"
        className="absolute z-0 w-full h-[380px] object-cover rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear"
      />
      <div className="absolute w-full h-[380px] flex z-10 bg-black/90 rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear"></div>
      <div
        className={`absolute bottom-32 left-10 z-20 flex flex-row justify-between items-center gap-5 xl:gap-96`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
          alt="image"
          className="w-48 min-w-44 h-[282px] rounded-3xl object-cover border-[1px] border-blue-400"
        />
        <section className="flex flex-col gap-1 xl:gap-3">
          <VoteAverage
            data={data}
            style="w-10 h-10 xl:w-12 xl:h-12 xl:text-xl"
          />
          <span className="flex flex-col gap-1 mb-2 xl:mb-0">
            <h4 className="text-base xl:text-xl font-bold text-left max-w-[420px] group-hover:text-blue-400 transition-all duration-75 ease-linear">
              {isMovie(data) ? data.title : data.name}
            </h4>
            <p className="text-sm xl:text-lg text-left text-white/60">
              {isMovie(data) ? data.release_date : data.first_air_date}
            </p>
          </span>
          <ContentType data={data} />
        </section>
        <div className="hidden xl:block text-sm xl:text-lg max-w-[200px] font-semibold text-left text-white/80 mx-5">
          <h5 className="font-bold">Overview:</h5>{" "}
          {data.overview && data.overview.slice(0, 100) + "..."}
        </div>
      </div>
    </div>
  );
};

export default SearchPageCard;
