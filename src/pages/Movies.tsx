import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import ContentCard from "../components/content/ContentCard";
import usePopularMovies from "../hooks/usePopularMovies";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const { data, error, hasNextPage, fetchNextPage } = usePopularMovies();

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <ContentCard data={movie} key={movie.id} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Movies;
