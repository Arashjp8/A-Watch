import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import { useEffect, useState } from "react";
import SearchPageCard from "./search/SearchPageCard";
import ContentHorizontalCard from "./content/ContentHorizontalCard";

interface Props {
  items?: Movie[] | TvShow[] | any[];
}

const VerticalScroll = ({ items }: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720);
    };

    handleResize(); // Call the handler initially
    window.addEventListener("resize", handleResize); // Attach the event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on unmount
    };
  }, []);

  const lengthIsOne = items?.length === 1;

  return (
    <div className="mb-2 mt-10 flex h-[100%] flex-col">
      {items?.length === 0 && (
        <p className="h-[100vh]">Found nothing try something else</p>
      )}
      {items?.map((item, index) => (
        <div
          key={index}
          className={`mb-6 ${index === items.length - 1 ? "mb-0" : ""} ${
            lengthIsOne ? "h-[100vh]" : ""
          }`}
        >
          {isSmallScreen ? (
            <ContentHorizontalCard
              data={item}
              width="min-w-[292px]"
              searchPage={true}
            />
          ) : (
            <SearchPageCard data={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalScroll;
