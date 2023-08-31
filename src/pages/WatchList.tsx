import ContentVerticalCard from "../components/content/ContentVerticalCard";
import useBookmarkStore from "./store";

const WatchList = () => {
  const { bookmarkedContent } = useBookmarkStore();

  return (
    <section
      className={`grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-0 lg:grid-cols-4 sxl:grid-cols-5 xl:grid-cols-6 ${
        bookmarkedContent.length < 6 ? "h-[87vh] sm:h-[100vh]" : ""
      }`}
    >
      {bookmarkedContent.map((content) => (
        <ContentVerticalCard
          key={content.id}
          data={content}
          size="w-36 h-[440px]"
          detailTop="top-48"
          nameFontSize="text-lg"
          marginBottom="mb-0"
        />
      ))}
    </section>
  );
};

export default WatchList;
