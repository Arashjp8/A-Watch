import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import Spinner from "./Spinner";
import ContentCard from "./content/ContentCard";

interface Props {
  items?: Movie[] | TvShow[] | any[];
  isLoading: boolean;
  error: Error | null;
}
const HorizontalScroll = ({ items, isLoading, error }: Props) => {
  if (isLoading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
      <div className="flex flex-nowrap">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`inline-block ${
              index === items.length - 1 ? "pr-0" : "pr-6"
            }`}
          >
            <ContentCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
