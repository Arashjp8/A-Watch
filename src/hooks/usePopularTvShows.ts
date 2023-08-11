import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";
import { popularTVShowsAPIURL } from "../services/config";
import { TvShow } from "../pages/Home";

const usePopularTvShows = () => {
  return useQuery<FetchResponse<TvShow>, Error>({
    queryKey: ["popular-tvshows"],
    queryFn: () => apiClient(popularTVShowsAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePopularTvShows;
