import { Movie, TvShow } from "../pages/Home";
import MovieCard from "./MovieCard";

interface Props {
  movies?: Movie[];
  tvShows?: TvShow[] | any[];
}
const HorizontalScroll = ({ movies, tvShows }: Props) => {
  if (movies)
    return (
      <div className="flex overflow-x-scroll my-20 pb-10 snap-mandatory snap-start">
        <div className="flex flex-nowrap">
          {movies?.map((movie) => (
            <div className="inline-block px-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  if (tvShows)
    return (
      <div className="flex overflow-x-scroll my-20 pb-10 snap-mandatory snap-start">
        <div className="flex flex-nowrap">
          {tvShows?.map((tvShow) => (
            <div className="inline-block px-3">
              <MovieCard tvShow={tvShow} />
            </div>
          ))}
        </div>
      </div>
    );

  return <div></div>;
};

export default HorizontalScroll;
