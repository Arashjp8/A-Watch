import { useQuery } from "@tanstack/react-query";
import { Person } from "../interfaces/Person";
import apiClient from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";

const usePerson = (id: number) => {
  return useQuery<Person, Error>({
    queryKey: ["person", id],
    queryFn: async () => {
      return apiClient(
        `${BaseUrl}/person/${id}?api_key=${apiKey}&language=en-US`
      ).then((res) => res.data);
    },
    keepPreviousData: false,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePerson;
