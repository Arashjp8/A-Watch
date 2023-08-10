import { create } from "zustand";

interface SearchbarToggle {
  isSearchbarOpen: boolean;
  openSearchbar: () => void;
  closeSearchbar: () => void;
}

const useSearchbarToggleStore = create<SearchbarToggle>((set) => ({
  isSearchbarOpen: false,
  openSearchbar: () => set(() => ({ isSearchbarOpen: true })),
  closeSearchbar: () => set(() => ({ isSearchbarOpen: false })),
}));

export default useSearchbarToggleStore;
