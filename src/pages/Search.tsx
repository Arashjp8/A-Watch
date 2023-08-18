import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import VerticalScroll from "../components/VerticalScroll";
import useSearchQuery from "../components/search/store";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useSearch();
  const searchQuery = useSearchQuery((s) => s.searchQuery);

  if (isLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  const fetchCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <h3 className="text-2xl ssm:text-3xl text-white/60 font-light pb-3 border-b-[1px] border-white/60">
        Results for <span className="text-white">{searchQuery}</span>
      </h3>
      <InfiniteScroll
        dataLength={fetchCount}
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={<Spinner />}
      >
        {data?.pages.map((page, index) => (
          <div key={index} className="flex flex-col">
            <section>
              <VerticalScroll items={page.results} />
            </section>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Search;
