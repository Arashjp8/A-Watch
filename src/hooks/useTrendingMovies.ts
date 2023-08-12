import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/Movie";
import apiClient, { FetchResponse } from "../services/apiClient";
import { trendingMoviesAPIURL } from "../services/config";

const useTrendingMovies = () => {
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["trending-movies"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient(trendingMoviesAPIURL, { params: { page: pageParam } }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages !== allPages.length
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingMovies;
