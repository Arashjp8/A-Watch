import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { SearchFetchResponse } from "../services/apiClient";
import { BaseUrl, apiKey } from "../services/config";
import useSearchQuery from "../components/search/store";
import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";

const useSearch = () => {
  const { searchQuery } = useSearchQuery();
  const searchAPIURL = `${BaseUrl}/search/multi?query=${searchQuery}&api_key=${apiKey}&language=en-US`;

  return useInfiniteQuery<SearchFetchResponse<Movie, TvShow>, Error>({
    queryKey: ["search-results", searchQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient(searchAPIURL, { params: { page: pageParam } }).then(
        (res) => res.data
      ),
    keepPreviousData: false,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages !== allPages.length
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useSearch;
