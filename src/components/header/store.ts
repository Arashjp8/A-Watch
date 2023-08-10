import { create } from "zustand";

interface HeaderToggle {
  isSearchbarOpen: boolean;
  openSearchbar: () => void;
  closeSearchbar: () => void;
}

const useHeaderToggleStore = create<HeaderToggle>((set) => ({
  isSearchbarOpen: false,
  openSearchbar: () => set(() => ({ isSearchbarOpen: true })),
  closeSearchbar: () => set(() => ({ isSearchbarOpen: false })),
}));

export default useHeaderToggleStore;
