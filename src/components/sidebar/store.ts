import { create } from "zustand";

interface SidebarToggle {
  sidebarToggle: boolean;
  makeSidebarToggleTrue: () => void;
  makeSidebarToggleFalse: () => void;
}

export const useSidebarToggleStore = create<SidebarToggle>((set) => ({
  sidebarToggle: false,
  makeSidebarToggleTrue: () => set(() => ({ sidebarToggle: true })),
  makeSidebarToggleFalse: () => set(() => ({ sidebarToggle: false })),
}));

interface SelectedIcon {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
}

export const useSelectedIconStore = create<SelectedIcon>((set) => ({
  selectedIcon: "Home",
  setSelectedIcon: (value: string) => set(() => ({ selectedIcon: value })),
}));
