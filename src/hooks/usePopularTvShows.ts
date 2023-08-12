import { useInfiniteQuery } from "@tanstack/react-query";
import { TvShow } from "../interfaces/TvShow";
import apiClient, { FetchResponse } from "../services/apiClient";
import { popularTVShowsAPIURL } from "../services/config";

const usePopularTvShows = () => {
  return useInfiniteQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["popular-tvshows"],
    queryFn: () => apiClient(popularTVShowsAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePopularTvShows;
