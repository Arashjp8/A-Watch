import { TvShow } from "../../interfaces/TvShow";
import { Movie } from "../../interfaces/Movie";
import { isMovie } from "./ContentVerticalCard";

interface Props {
  data?: Movie | TvShow;
}
const ContentDetailHero = ({ data }: Props) => {
  return (
    <>
      {/* desktop view */}
      <div className="md:block hidden">
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
          alt="backdrop"
          style={{
            WebkitMaskImage: "linear-gradient(to left, transparent, black 40%)",
            maskImage: "linear-gradient(to left, transparent, black 40%)",
          }}
          className="absolute top-0 left-0 z-0 opacity-60 w-[90%] h-[420px] object-center object-cover rounded-3xl"
        />
        <div className="absolute inset-0 z-20 w-full h-[420px] object-center object-cover rounded-3xl bg-black/60">
          <h2 className="absolute bottom-14 left-14 max-w-[50%] lg:max-w-[60%] leading-tight text-white text-5xl font-bold">
            {data && isMovie(data) ? data?.title : data?.name}
          </h2>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.poster_path}`}
          alt="poster"
          className="absolute z-50 top-24 right-14 w-60 rounded-3xl"
        />
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-col gap-20">
        <img
          src={`https://image.tmdb.org/t/p/w1280${data?.poster_path}`}
          alt="poster"
          className="w-60 min-w-[240px] rounded-3xl"
        />
        <h2 className=" text-white text-3xl font-bold">
          {data && isMovie(data) ? data?.title : data?.name}
        </h2>
      </div>
    </>
  );
};

export default ContentDetailHero;
