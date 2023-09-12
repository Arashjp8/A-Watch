import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import ContentGrid from "../components/content/ContentGrid";
import usePopularMovies from "../hooks/usePopularMovies";
import { useLocation } from "react-router-dom";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";
import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";
import { useSelectedIconStore } from "../components/sidebar/store";

const Contents = () => {
  const contentHooksMapping: Record<
    string,
    UseInfiniteQueryResult<FetchResponse<Movie | TvShow>, Error>
  > = {
    "/movies": usePopularMovies(),
    "/tvshows": usePopularTvShows(),
    "/trending/movies": useTrendingMovies(),
    "/trending/tvshows": useTrendingTvShows(),
  };

  const location = useLocation();

  const getContentHook = () => {
    return contentHooksMapping[location.pathname];
  };

  const { data, error, hasNextPage, fetchNextPage } = getContentHook();

  const { selectedIcon } = useSelectedIconStore();

  if (error) return <p className="h-[100vh]">{error.message}</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedIcon]);

  const fetchMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchMoviesCount}
      next={fetchNextPage}
      hasMore={hasNextPage || false}
      loader={<Spinner />}
    >
      <ContentGrid data={data} />
    </InfiniteScroll>
  );
};

export default Contents;
