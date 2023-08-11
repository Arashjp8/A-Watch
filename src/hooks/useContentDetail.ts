import { useQuery } from "@tanstack/react-query";
import { Movie, TvShow } from "../pages/Home";
import apiClient from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";

type Content = Movie | TvShow;

const useContentDetail = (content: string, selectedContentId: number) => {
  return useQuery<Content, Error>({
    queryKey: ["content-detail", content, selectedContentId],
    queryFn: async () => {
      return await apiClient(
        `${BaseUrl}/${content}/${selectedContentId}?api_key=${apiKey}&language=en-US`
      ).then((res) => res.data);
    },
  });
};

export default useContentDetail;
