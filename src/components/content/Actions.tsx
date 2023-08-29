import { TbBookmarkFilled, TbBookmark } from "react-icons/tb";
import Gauge from "../gauge/Gauge";
import useBookmarkStore from "../../pages/store";
import { Movie } from "../../interfaces/Movie";
import { TvShow } from "../../interfaces/TvShow";
import { useEffect } from "react";
import Button from "./Button";

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
      <Button
        handleClick={handleBookmark}
        toggle={isBookmarked}
        beforeClickIcon={<TbBookmark size={22} />}
        afterClickIcon={<TbBookmarkFilled size={22} />}
      />
      <Gauge data={data} size="w-14 h-14 text-xl" />
    </div>
  );
};

export default Actions;
