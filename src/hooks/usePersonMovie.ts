import { useQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/Movie";
import { BaseUrl, apiKey } from "../services/config";
import apiClient from "../services/apiClient";

interface PersonMovies {
  cast: Movie[];
  crew: Movie[];
}

const usePersonMovie = (personId: number) => {
  return useQuery<PersonMovies, Error>({
    queryKey: ["person-movies", personId],
    queryFn: async () => {
      return await apiClient(
        `${BaseUrl}/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`,
      ).then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePersonMovie;
