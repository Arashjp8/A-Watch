import { useQuery } from "@tanstack/react-query";
import { TvShow } from "../interfaces/TvShow";
import apiClient from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";

interface PersonTvShows {
  cast: TvShow[];
  crew: TvShow[];
}
const usePersonTvShows = (personId: number) => {
  return useQuery<PersonTvShows, Error>({
    queryKey: ["person-tvshows", personId],
    queryFn: async () => {
      return await apiClient(
        `${BaseUrl}/person/${personId}/tv_credits?api_key=${apiKey}&language=en-US`,
      ).then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePersonTvShows;
