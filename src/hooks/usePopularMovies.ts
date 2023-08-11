import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";
import { popularMovieAPIURL } from "../services/config";
import { Movie } from "../interfaces/Movie";

const usePopularMovies = () => {
  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["popular-movies"],
    queryFn: () => apiClient(popularMovieAPIURL).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePopularMovies;
