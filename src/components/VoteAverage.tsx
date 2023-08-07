import { Movie, TvShow } from "../pages/Home";

interface Props {
  movie?: Movie;
  tvShow?: TvShow;
}
const VoteAverage = ({ movie, tvShow }: Props) => {
  if (movie)
    return (
      <div
        className={`flex justify-center items-center rounded-full w-12 h-12 bg-transparent border-2 ${
          movie.vote_average * 10 > 70
            ? "border-green-500"
            : "border-yellow-400"
        }  text-center`}
      >
        <p
          className={`${
            movie.vote_average * 10 > 70 ? "text-green-500" : "text-yellow-400"
          }`}
        >
          {Math.floor(movie.vote_average * 10)}
        </p>
      </div>
    );

  if (tvShow)
    return (
      <div
        className={`flex justify-center items-center rounded-full w-12 h-12 bg-transparent border-2 ${
          tvShow.vote_average * 10 > 70
            ? "border-green-500"
            : "border-yellow-400"
        }  text-center`}
      >
        <p
          className={`${
            tvShow.vote_average * 10 > 70 ? "text-green-500" : "text-yellow-400"
          }`}
        >
          {Math.floor(tvShow.vote_average * 10)}
        </p>
      </div>
    );

  return <div></div>;
};

export default VoteAverage;
