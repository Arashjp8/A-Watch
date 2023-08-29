import { TvShow } from "../../interfaces/TvShow";
import { Movie } from "../../interfaces/Movie";
import { isMovie } from "./ContentVerticalCard";
import { useEffect } from "react";
import { TbBookmarkFilled, TbBookmark } from "react-icons/tb";
import useBookmarkStore from "../../pages/store";
import Gauge from "../gauge/Gauge";

interface Props {
  data?: Movie | TvShow;
}
const ContentDetailHero = ({ data }: Props) => {
  const {
    isBookmarked,
    changeIsBookmarkedToTrue,
    bookmarkTheContent,
    removeFromBookmarked,
    checkContentBookmarked,
  } = useBookmarkStore();
  useEffect(() => {
    if (data) checkContentBookmarked(data);
  }, [data, isBookmarked]);
  return (
    <>
      {/* desktop view */}
      <div className="hidden md:block">
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
          alt="backdrop"
          style={{
            WebkitMaskImage: "linear-gradient(to left, transparent, black 40%)",
            maskImage: "linear-gradient(to left, transparent, black 40%)",
          }}
          className="absolute left-0 top-0 z-0 h-[420px] w-[90%] rounded-3xl object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 z-20 h-[420px] w-full rounded-3xl bg-black/60 object-cover object-center">
          <h2 className="absolute bottom-28 left-14  max-w-[30%] text-4xl font-bold leading-tight text-white">
            {data && isMovie(data) ? data?.title : data?.name}
          </h2>
          <div className="absolute bottom-10 left-14 flex flex-row gap-5">
            <button
              onClick={() => {
                changeIsBookmarkedToTrue();
                if (data && !isBookmarked) {
                  bookmarkTheContent(data);
                }
                if (data && isBookmarked) {
                  removeFromBookmarked(data);
                }
              }}
              className={`mb-1 text-xl font-semibold ${
                isBookmarked
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              } flex flex-row items-center gap-1 rounded-3xl p-4 transition-all duration-150 ease-linear hover:rounded-xl`}
            >
              {isBookmarked ? (
                <TbBookmarkFilled size={22} />
              ) : (
                <TbBookmark size={22} />
              )}
            </button>
            <Gauge data={data} size="w-14 h-14 text-xl" />
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.poster_path}`}
          alt="poster"
          className="absolute right-14 top-24 z-50 w-60 rounded-3xl"
        />
      </div>

      {/* mobile view */}
      <div className="flex flex-col gap-20 md:hidden">
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.poster_path}`}
          alt="poster"
          className="w-60 min-w-[240px] rounded-3xl"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-white">
            {data && isMovie(data) ? data?.title : data?.name}
          </h2>
          <div className="flex flex-row gap-5">
            <button
              onClick={() => {
                changeIsBookmarkedToTrue();
                if (data && !isBookmarked) {
                  bookmarkTheContent(data);
                }
                if (data && isBookmarked) {
                  removeFromBookmarked(data);
                }
              }}
              className={`mb-1 text-xl font-semibold ${
                isBookmarked
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              } flex flex-row items-center gap-1 rounded-3xl p-4 transition-all duration-150 ease-linear hover:rounded-xl`}
            >
              {isBookmarked ? (
                <TbBookmarkFilled size={22} />
              ) : (
                <TbBookmark size={22} />
              )}
            </button>
            <Gauge data={data} size="w-14 h-14 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDetailHero;
