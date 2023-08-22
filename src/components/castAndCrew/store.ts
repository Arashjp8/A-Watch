import { create } from "zustand";

interface SelectedCastAndCrewStore {
  selectedCastAndCrewId: number;
  changeSelectedCastAndCrewId: (value: number) => void;
}

const useCastAndCrewStore = create<SelectedCastAndCrewStore>((set) => ({
  selectedCastAndCrewId: 0,
  changeSelectedCastAndCrewId: (id: number) =>
    set(() => ({ selectedCastAndCrewId: id })),
}));

export default useCastAndCrewStore;
