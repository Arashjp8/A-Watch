import { useQuery } from "@tanstack/react-query";
import { Credits } from "../interfaces/Credits";
import apiClient from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";

const useCredits = (content: string, selectedContentId: number) => {
  return useQuery<Credits, Error>({
    queryKey: ["content-credits", content, selectedContentId],
    queryFn: async () => {
      return await apiClient(
        `${BaseUrl}/${content}/${selectedContentId}/credits?api_key=${apiKey}&language=en-US`
      ).then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useCredits;
