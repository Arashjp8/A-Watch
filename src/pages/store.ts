import { create } from "zustand";

interface HeaderToggle {
  headerToggle: boolean;
  makeHeaderToggleTrue: () => void;
  makeHeaderToggleFalse: () => void;
}

const useHeaderToggleStore = create<HeaderToggle>((set) => ({
  headerToggle: false,
  makeHeaderToggleTrue: () => set(() => ({ headerToggle: true })),
  makeHeaderToggleFalse: () => set(() => ({ headerToggle: false })),
}));

export default useHeaderToggleStore;
