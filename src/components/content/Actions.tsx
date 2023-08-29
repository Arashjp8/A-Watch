import { TbBookmarkFilled, TbBookmark } from "react-icons/tb";
import Gauge from "../gauge/Gauge";
import useBookmarkStore from "../../pages/store";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
}

const Actions = ({ data }: Props) => {
  const {
    isBookmarked,
    changeIsBookmarkedToTrue,
    bookmarkTheContent,
    removeFromBookmarked,
  } = useBookmarkStore();

  return (
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
  );
};

export default Actions;
