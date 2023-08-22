import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";
import { FetchVideosResponse } from "../interfaces/Videos";

const useContentVideos = (content: string, selectedContentId: number) => {
  return useQuery<FetchVideosResponse, Error>({
    queryKey: ["content-videos", content, selectedContentId],
    queryFn: async () => {
      return await apiClient(
        `${BaseUrl}/${content}/${selectedContentId}/videos?api_key=${apiKey}&language=en-US`
      ).then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useContentVideos;
