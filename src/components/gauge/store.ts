import { create } from "zustand";

interface IsHoveredStore {
  isHovered: boolean;
  setHovered: (value: boolean) => void;
}

const useIsHoveredStore = create<IsHoveredStore>((set) => ({
  isHovered: false,
  setHovered: (someBoolean: boolean) => set(() => ({ isHovered: someBoolean })),
}));

export default useIsHoveredStore;
