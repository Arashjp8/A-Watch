import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/Movie";
import apiClient, { FetchResponse } from "../services/apiClient";
import { trendingMoviesAPIURL } from "../services/config";

const useTrendingMovies = () => {
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["trending-movies"],
    queryFn: () => apiClient(trendingMoviesAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingMovies;
