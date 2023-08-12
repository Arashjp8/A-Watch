import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import ContentVerticalCard from "./content/ContentVerticalCard";
import { useLocation } from "react-router-dom";
import ContentHorizontalCard from "./content/ContentHorizontalCard";

interface Props {
  items?: Movie[] | TvShow[] | any[];
  title?: string;
}
const HorizontalScroll = ({ items, title }: Props) => {
  const location = useLocation();

  return (
    <div className="flex w-[100%] overflow-x-scroll mt-10 mb-2 snap-mandatory snap-start">
      <div className="flex flex-nowrap w-full">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`inline-block ${
              index === items.length - 1 ? "pr-0" : "pr-6"
            }`}
          >
            {location.pathname === "/trending" ||
            title?.includes("Trending") ? (
              <ContentHorizontalCard data={item} />
            ) : (
              <ContentVerticalCard data={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
