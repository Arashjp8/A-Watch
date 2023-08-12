import { useInfiniteQuery } from "@tanstack/react-query";
import { TvShow } from "../interfaces/TvShow";
import apiClient, { FetchResponse } from "../services/apiClient";
import { trendingTvShowsAPIURL } from "../services/config";

const useTrendingTvShows = () => {
  return useInfiniteQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["trending-tvshows"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient(trendingTvShowsAPIURL, {
        params: {
          page: pageParam,
        },
      }).then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages !== allPages.length
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingTvShows;
