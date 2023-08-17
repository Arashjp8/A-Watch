import Spinner from "../components/Spinner";
import VerticalScroll from "../components/VerticalScroll";
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
        <div key={index} className="grid grid-cols-2">
          <section>
            <h3 className="text-2xl ssm:text-3xl text-white/60 font-light pb-5">
              Movie
            </h3>
            <VerticalScroll
              items={page.results.filter((item) => item.media_type === "movie")}
            />
          </section>
          <section>
            <h3 className="text-2xl ssm:text-3xl text-white/60 font-light pb-5">
              Tv Show
            </h3>
            <VerticalScroll
              items={page.results.filter((item) => item.media_type === "tv")}
            />
          </section>
        </div>
      ))}
    </>
  );
};

export default Search;
