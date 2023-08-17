import Spinner from "../components/Spinner";
import ContentHorizontalCard from "../components/content/ContentHorizontalCard";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { data, isLoading, error } = useSearch();

  if (isLoading)
    <div className="h-[100vh]">
      <Spinner />
    </div>;

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index} className="flex flex-col">
          <h2>movie</h2>
          {page?.results
            .filter((item) => item.media_type === "movie")
            .map((item, index) => (
              <ContentHorizontalCard key={index} data={item} />
            ))}
          <h2>tv</h2>
          {page?.results
            .filter((item) => item.media_type === "tv")
            .map((item, index) => (
              <ContentHorizontalCard key={index} data={item} />
            ))}
        </div>
      ))}
    </>
  );
};

export default Search;
