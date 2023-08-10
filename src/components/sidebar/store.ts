import { create } from "zustand";

interface SidebarToggle {
  sidebarToggle: boolean;
  makeSidebarToggleTrue: () => void;
  makeSidebarToggleFalse: () => void;
}

const useSidebarToggleStore = create<SidebarToggle>((set) => ({
  sidebarToggle: false,
  makeSidebarToggleTrue: () => set(() => ({ sidebarToggle: true })),
  makeSidebarToggleFalse: () => set(() => ({ sidebarToggle: false })),
}));

export default useSidebarToggleStore;
