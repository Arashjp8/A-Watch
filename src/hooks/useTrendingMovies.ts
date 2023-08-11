import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";
import { Movie } from "../interfaces/Movie";
import { trendingMoviesAPIURL } from "../services/config";

const useTrendingMovies = () => {
  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["trending-movies"],
    queryFn: () => apiClient(trendingMoviesAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useTrendingMovies;
