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
    <div className="mb-2 mt-10 flex w-[100%] snap-mandatory snap-start overflow-x-scroll">
      <div className="flex w-full flex-nowrap">
        {items?.map((item, index) => (
          <div
            key={index}
            className={`inline-block  ${
              index === items.length - 1 ? "pr-0" : "pr-4"
            }`}
          >
            {location.pathname === "/trending" ||
            title?.includes("Trending") ? (
              <ContentHorizontalCard
                data={item}
                width="w-60"
                searchPage={false}
              />
            ) : (
              <ContentVerticalCard
                data={item}
                size="w-28 h-[340px]"
                detailTop="top-36"
                nameFontSize="text-sm"
                marginBottom="mb-5"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
