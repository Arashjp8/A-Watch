import { create } from "zustand";

interface SelectedMovieId {
  content: string;
  isAMovie: () => void;
  isATvShow: () => void;
  selectedContentId: number;
  changeSelectedContentId: (id: number) => void;
}

const useSelectedContentId = create<SelectedMovieId>((set) => ({
  content: "movie",
  isAMovie: () => set(() => ({ content: "movie" })),
  isATvShow: () => set(() => ({ content: "tv" })),
  selectedContentId: 0,
  changeSelectedContentId: (id: number) =>
    set(() => ({ selectedContentId: id })),
}));

export default useSelectedContentId;
