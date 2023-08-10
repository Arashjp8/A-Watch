import { Movie, TvShow } from "../pages/Home";
import ContentCard from "./content/ContentCard";

interface Props {
  movies?: Movie[];
  tvShows?: TvShow[] | any[];
}
const HorizontalScroll = ({ movies, tvShows }: Props) => {
  if (movies)
    return (
      <div className="flex overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
        <div className="flex flex-nowrap">
          {movies?.map((movie, index) => (
            <div
              key={index}
              className={`inline-block ${
                index === movies.length - 1 ? "pr-0" : "pr-6"
              }`}
            >
              <ContentCard data={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  if (tvShows)
    return (
      <div className="flex overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
        <div className="flex flex-nowrap">
          {tvShows?.map((tvShow, index) => (
            <div
              key={index}
              className={`inline-block ${
                index === tvShows.length - 1 ? "pr-0" : "pr-6"
              }`}
            >
              <ContentCard data={tvShow} />
            </div>
          ))}
        </div>
      </div>
    );

  return <div></div>;
};

export default HorizontalScroll;
