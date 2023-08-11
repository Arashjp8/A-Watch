import { Movie, TvShow } from "../pages/Home";
import ContentCard from "./content/ContentCard";

interface Props {
  items?: Movie[] | TvShow[] | any[];
}
const HorizontalScroll = ({ items }: Props) => {
  return (
    <div className="flex overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
      <div className="flex flex-nowrap">
        {items?.map((movie, index) => (
          <div
            key={index}
            className={`inline-block ${
              index === items.length - 1 ? "pr-0" : "pr-6"
            }`}
          >
            <ContentCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
