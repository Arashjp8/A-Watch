import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import ContentVerticalCard from "./content/ContentVerticalCard";
import ContentHorizontalCard from "./content/ContentHorizontalCard";
import { useEffect, useState } from "react";

interface Props {
  items?: Movie[] | TvShow[] | any[];
  title?: string;
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
      {items?.map((item, index) => (
        <div
          key={index}
          className={`mb-6 ${index === items.length - 1 ? "mb-0" : ""}`}
        >
          {isSmallScreen ? (
            <ContentVerticalCard data={item} />
          ) : (
            <ContentHorizontalCard data={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalScroll;
