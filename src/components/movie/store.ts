import { create } from "zustand";

interface SelectedMovieId {
  selectedMovieId: number;
  changeSelectedMovieId: (id: number) => void;
}

const useSelectedMovieId = create<SelectedMovieId>((set) => ({
  selectedMovieId: 0,
  changeSelectedMovieId: (id: number) => set(() => ({ selectedMovieId: id })),
}));

export default useSelectedMovieId;
