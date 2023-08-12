import { useInfiniteQuery } from "@tanstack/react-query";
import { TvShow } from "../interfaces/TvShow";
import apiClient, { FetchResponse } from "../services/apiClient";
import { popularTVShowsAPIURL } from "../services/config";

const usePopularTvShows = () => {
  return useInfiniteQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["popular-tvshows"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient(popularTVShowsAPIURL, {
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

export default usePopularTvShows;
