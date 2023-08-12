import { useInfiniteQuery } from "@tanstack/react-query";
import { TvShow } from "../interfaces/TvShow";
import apiClient, { FetchResponse } from "../services/apiClient";
import { trendingTvShowsAPIURL } from "../services/config";

const useTrendingTvShows = () => {
  return useInfiniteQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["trending-tvshows"],
    queryFn: () => apiClient(trendingTvShowsAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingTvShows;
