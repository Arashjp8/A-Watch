import { create } from "zustand";

interface SearchQuery {
  searchQuery: string;
  changeSearchQuery: (searchQuery: string) => void;
}

const useSearchQuery = create<SearchQuery>((set) => ({
  searchQuery: "",
  changeSearchQuery: (searchQuery: string) => set(() => ({ searchQuery })),
}));

export default useSearchQuery;
