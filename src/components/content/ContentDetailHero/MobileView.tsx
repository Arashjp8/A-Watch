import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";
import Actions from "../Actions";
import { isMovie } from "../ContentVerticalCard";

interface Props {
  data?: Movie | TvShow;
}
const MobileView = ({ data }: Props) => {
  return (
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
        <Actions data={data} />
      </div>
    </div>
  );
};

export default MobileView;
