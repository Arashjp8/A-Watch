import { Movie } from "../pages/Home";

interface Props {
  movie?: Movie;
}
const MovieDetailHero = ({ movie }: Props) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
        alt="backdrop"
        className="absolute z-0 opacity-60 w-full h-96 object-center object-cover rounded-3xl"
      />
      <div className="absolute z-20 w-full h-96 object-center object-cover rounded-3xl bg-gradient-to-t from-black">
        <h2 className="absolute bottom-14 left-24 text-white text-5xl font-bold">
          {movie?.title}
        </h2>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
        alt="poster"
        className="absolute z-50 top-24 right-24 w-60 rounded-3xl"
      />
    </>
  );
};

export default MovieDetailHero;
