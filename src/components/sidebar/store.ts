import { create } from "zustand";

interface SidebarToggle {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebarToggleStore = create<SidebarToggle>((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set(() => ({ isSidebarOpen: true })),
  closeSidebar: () => set(() => ({ isSidebarOpen: false })),
}));

interface SelectedIcon {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
}

export const useSelectedIconStore = create<SelectedIcon>((set) => ({
  selectedIcon: "Home",
  setSelectedIcon: (value: string) => set(() => ({ selectedIcon: value })),
}));
