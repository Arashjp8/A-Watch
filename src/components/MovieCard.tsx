import { Movie, TvShow } from "../pages/Home";

interface Props {
  movie?: Movie;
  tvShow?: TvShow;
  styleProp?: string;
}
const MovieCard = ({ movie, tvShow, styleProp }: Props) => {
  if (movie)
    return (
      <div
        key={movie.id}
        className={`${styleProp} group relative card overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt="image"
          className="group-hover:scale-110 group-hover:rotate-3 overflow-hidden transition duration-1000 ease-linear w-full  h-full rounded-3xl absoloute"
        />
        <div className="group-hover:scale-100 card-title transition-opacity">
          <span className="flex flex-col gap-5">
            <p className="text-md font-bold  mt-10 text-center pt-2 px-4">
              {movie.title}
            </p>
            <p className="text-sm text-center px-4">
              Release Date: {movie.release_date}
            </p>
          </span>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div
              className={`flex justify-center items-center rounded-full w-12 h-12 bg-transparent border-2 ${
                movie.vote_average * 10 > 70
                  ? "border-green-500"
                  : "border-yellow-400"
              }  text-center`}
            >
              <p
                className={`${
                  movie.vote_average * 10 > 70
                    ? "text-green-500"
                    : "text-yellow-400"
                }`}
              >
                {movie.vote_average * 10}
              </p>
            </div>
            <button className="bg-blue-700 text-white hover:bg-white hover:text-blue-600 font-medium transition-all duration-150 ease-linear text-md px-4 py-2 rounded-3xl hover:rounded-xl mb-10">
              See More
            </button>
          </div>
        </div>
      </div>
    );

  if (tvShow)
    return (
      <div
        key={tvShow.id}
        className={`${styleProp} group relative card overflow-hidden`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w1280${tvShow.poster_path}`}
          alt="image"
          className="group-hover:scale-110 group-hover:rotate-3 overflow-hidden transition duration-1000 ease-linear w-full  h-full rounded-3xl absoloute"
        />
        <div className="group-hover:scale-100 card-title transition-opacity">
          <span className="flex flex-col gap-5">
            <p className="text-md font-bold  mt-10 text-center pt-2 px-4">
              {tvShow.name}
            </p>
            <p className="text-sm text-center px-4">
              First Air Date: {tvShow.first_air_date}
            </p>
          </span>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div
              className={`flex justify-center items-center rounded-full w-12 h-12 bg-transparent border-2 ${
                tvShow.vote_average * 10 > 70
                  ? "border-green-500"
                  : "border-yellow-400"
              }  text-center`}
            >
              <p
                className={`${
                  tvShow.vote_average * 10 > 70
                    ? "text-green-500"
                    : "text-yellow-400"
                }`}
              >
                {tvShow.vote_average * 10}
              </p>
            </div>
            <button className="bg-blue-700 text-white hover:bg-white hover:text-blue-600 font-medium transition-all duration-150 ease-linear text-md px-4 py-2 rounded-3xl hover:rounded-xl mb-10">
              See More
            </button>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default MovieCard;
