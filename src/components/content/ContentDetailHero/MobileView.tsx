import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";
import Actions from "../Actions";
import { isMovie } from "../ContentVerticalCard";

interface Props {
  data?: Movie | TvShow;
}
const MobileView = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center gap-10 md:hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        className="w-36 rounded-3xl"
        loading="lazy"
      />
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-center text-2xl font-bold text-white">
          {data && isMovie(data) ? data?.title : data?.name}
        </h2>
        <Actions data={data} gaugeSize={2} buttonSize={20} />
      </div>
    </div>
  );
};

export default MobileView;
