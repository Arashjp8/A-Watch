import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";
import { TvShow } from "../pages/Home";
import { trendingTvShowsAPIURL } from "../services/config";

const useTrendingTvShows = () => {
  return useQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["trending-tvshows"],
    queryFn: () => apiClient(trendingTvShowsAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingTvShows;
