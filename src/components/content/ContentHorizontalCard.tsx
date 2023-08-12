import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useSelectedIconStore } from "../sidebar/store";
import { isMovie } from "./ContentVerticalCard";
import useSelectedContentId from "./store";
import VoteAverage from "../VoteAverage";

interface Props {
  data: Movie | TvShow;
  styleProp?: string;
}

const ContentHorizontalCard = ({ data, styleProp }: Props) => {
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
      className={`${styleProp} group relative w-72 xl:w-[580px] h-[450px] cursor-pointer overflow-hidden`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
        alt="backdrop"
        className="absolute z-0 w-full h-[380px] object-cover rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear"
      />
      <div className="absolute w-full h-[380px] flex flex-row gap-3 bg-gradient-to-t from-black rounded-3xl group-hover:rounded-xl transition-all duration-150 ease-linear"></div>
      <div className="absolute bottom-12 left-0 flex items-center gap-5 xl:gap-10">
        <img
          src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
          alt="image"
          className="w-42 h-[212px] rounded-3xl object-cover border-[1px] border-blue-400"
        />
        <section className="flex flex-col gap-1 xl:gap-3">
          <VoteAverage
            data={data}
            style="w-10 h-10 xl:w-12 xl:h-12 xl:text-xl"
          />
          <span className="flex flex-col gap-1 mb-2 xl:mb-0">
            <h4 className="text-base xl:text-2xl font-bold text-left max-w-[320px] group-hover:text-blue-400 transition-all duration-75 ease-linear">
              {isMovie(data) ? data.title : data.name}
            </h4>
            <p className="text-sm xl:text-lg text-left text-white/60">
              {isMovie(data) ? data.release_date : data.first_air_date}
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};

export default ContentHorizontalCard;
