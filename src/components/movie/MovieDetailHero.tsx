import { Movie } from "../../pages/Home";

interface Props {
  movie?: Movie;
}
const MovieDetailHero = ({ movie }: Props) => {
  return (
    <>
      {/* desktop view */}
      <div className="md:block hidden">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
          alt="backdrop"
          className="absolute z-0 opacity-60 w-full h-96 object-center object-cover rounded-3xl"
        />
        <div className="absolute z-20 w-full h-96 object-center object-cover rounded-3xl bg-gradient-to-t from-black">
          <h2 className="absolute bottom-14 left-14 text-white text-5xl font-bold">
            {movie?.title}
          </h2>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
          alt="poster"
          className="absolute z-50 top-24 right-14 w-60 rounded-3xl"
        />
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-col gap-20">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
          alt="poster"
          className="w-60 min-w-[240px] rounded-3xl"
        />
        <h2 className=" text-white text-5xl font-bold">{movie?.title}</h2>
      </div>
    </>
  );
};

export default MovieDetailHero;
