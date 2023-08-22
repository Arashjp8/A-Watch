import ContentVerticalCard from "../components/content/ContentVerticalCard";
import useBookmarkStore from "./store";

const WatchList = () => {
  const { bookmarkedContent } = useBookmarkStore();

  return (
    <section
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sxl:grid-cols-5 xl:grid-cols-6 gap-5 md:gap-0 ${
        bookmarkedContent.length < 6 ? "h-[87vh] sm:h-[100vh]" : ""
      }`}
    >
      {bookmarkedContent.map((content) => (
        <ContentVerticalCard key={content.id} data={content} />
      ))}
    </section>
  );
};

export default WatchList;
