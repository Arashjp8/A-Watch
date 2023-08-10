import { create } from "zustand";

interface HeaderToggle {
  toggle: boolean;
  true: (value: boolean) => void;
  false: (value: boolean) => void;
}

create<HeaderToggle>((set) => ({
  toggle: false,
  true: (value) => set(() => ({ toggle: value })),
  false: (value) => set(() => ({ toggle: value })),
}));
