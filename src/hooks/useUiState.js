import { create } from "zustand";

const useUiState = create((set) => ({
  homeCategory: "",
  headerImageScr: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (value) => set({ headerImageScr: value }),
}));

export default useUiState;
