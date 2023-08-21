import { create } from "zustand";
import { TvShow } from "../interfaces/TvShow";
import { Movie } from "../interfaces/Movie";

interface BookmarkStore {
  isBookmarked: boolean;
  changeIsBookmarkedToTrue: () => void;
  bookmarkedContent: (TvShow | Movie)[];
  bookmarkTheContent: (content: TvShow | Movie) => void;
  removeFromBookmarked: (content: TvShow | Movie) => void;
  checkContentBookmarked: (content: TvShow | Movie) => void;
}

const useBookmarkStore = create<BookmarkStore>((set) => ({
  isBookmarked: false,
  changeIsBookmarkedToTrue: () => set(() => ({ isBookmarked: true })),
  bookmarkedContent: [],
  bookmarkTheContent: (content: TvShow | Movie) =>
    set((prev) => ({
      isBookmarked: true,
      bookmarkedContent: [...prev.bookmarkedContent, content],
    })),
  removeFromBookmarked: (content: TvShow | Movie) =>
    set((prev) => ({
      isBookmarked: false,
      bookmarkedContent: prev.bookmarkedContent.filter(
        (item) => item.id !== content.id
      ),
    })),
  checkContentBookmarked: (content: TvShow | Movie) =>
    set((prev) => ({
      isBookmarked: prev.bookmarkedContent.some(
        (item) => item.id === content.id
      ),
    })),
}));

export default useBookmarkStore;
