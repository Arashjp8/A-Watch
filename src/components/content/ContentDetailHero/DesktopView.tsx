import { isMovie } from "../ContentVerticalCard";
import Actions from "../Actions";
import { Movie } from "../../../interfaces/Movie";
import { TvShow } from "../../../interfaces/TvShow";

interface Props {
  data?: Movie | TvShow;
}

const DesktopView = ({ data }: Props) => {
  return (
    <div className="hidden md:block">
      <img
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        style={{
          WebkitMaskImage: "linear-gradient(to left, transparent, black 40%)",
          maskImage: "linear-gradient(to left, transparent, black 40%)",
        }}
        className="absolute left-0 top-0 z-0 h-[420px] w-[90%] rounded-3xl object-cover object-center opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 z-20 h-[420px] w-full rounded-3xl bg-black/60 object-cover object-center">
        <h2 className="absolute bottom-28 left-14  max-w-[30%] text-4xl font-bold leading-tight text-white">
          {data && isMovie(data) ? data?.title : data?.name}
        </h2>
        <Actions data={data} gaugeSize={4} buttonSize={22} />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt={data && isMovie(data) ? data?.title : data?.name}
        className="absolute right-14 top-24 z-50 w-60 rounded-3xl"
        loading="lazy"
      />
    </div>
  );
};

export default DesktopView;
