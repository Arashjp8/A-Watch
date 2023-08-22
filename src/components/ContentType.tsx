import { Movie } from "../interfaces/Movie";
import { TvShow } from "../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
}

const ContentType = ({ data }: Props) => {
  const isMovie = data?.media_type === "movie" ? true : false;
  return (
    <div
      className={`flex items-center justify-center w-14 h-8 xl:w-16 xl:h-10 rounded-3xl text-xs xl:text-sm px-1 ${
        isMovie
          ? "bg-red-400/20 border-2 border-red-600 text-red-300"
          : "bg-purple-400/20 border-2 border-purple-600 text-purple-300"
      }`}
    >
      {isMovie ? "Movie" : "Series"}
    </div>
  );
};

export default ContentType;
