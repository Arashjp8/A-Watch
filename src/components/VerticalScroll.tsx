import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import ContentVerticalCard from "./content/ContentVerticalCard";
import { useEffect, useState } from "react";
import SearchPageCard from "./search/SearchPageCard";

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

  return (
    <div className="flex flex-col h-[100%] overflow-y-scroll mt-10 mb-2 snap-mandatory snap-start">
      {items?.length === 0 && (
        <p className="h-[100vh]">Found nothing try something else</p>
      )}
      {items?.map((item, index) => (
        <div
          key={index}
          className={`mb-6 ${index === items.length - 1 ? "mb-0" : ""}`}
        >
          {isSmallScreen ? (
            // <ContentVerticalCard data={item} />
            <SearchPageCard data={item} />
          ) : (
            <SearchPageCard data={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalScroll;
