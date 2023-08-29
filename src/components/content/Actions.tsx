import { TbBookmarkFilled, TbBookmark } from "react-icons/tb";
import Gauge from "../gauge/Gauge";
import useBookmarkStore from "../../pages/store";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useEffect } from "react";

interface Props {
  data?: Movie | TvShow;
}

const Actions = ({ data }: Props) => {
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

  const handleBookmark = () => {
    changeIsBookmarkedToTrue();
    if (data && !isBookmarked) {
      bookmarkTheContent(data);
    }
    if (data && isBookmarked) {
      removeFromBookmarked(data);
    }
  };

  return (
    <div className="flex flex-row gap-5 md:absolute md:bottom-10 md:left-14">
      <button
        onClick={() => handleBookmark()}
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
  );
};

export default Actions;
