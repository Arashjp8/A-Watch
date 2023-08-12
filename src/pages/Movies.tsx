import React from "react";
import Spinner from "../components/Spinner";
import ContentCard from "../components/content/ContentCard";
import usePopularMovies from "../hooks/usePopularMovies";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    usePopularMovies();

  if (isLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  const fetchMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchMoviesCount}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<Spinner />}
    >
      <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sxl:grid-cols-5 xl:grid-cols-6">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <ContentCard data={movie} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {/* <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="my-10 w-full text-sm font-semibold text-white bg-blue-600 hover:bg-white hover:text-blue-600 py-3 px-4 rounded-3xl hover:rounded-xl transition-all duration-150 ease-linear flex flex-row gap-1 items-center justify-center"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button> */}
    </InfiniteScroll>
  );
};

export default Movies;
