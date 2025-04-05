import { create } from "zustand";

const useUiState = create<UiState>((set) => ({
  homeCategory: "",
  headerImageSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value: string) => set({ homeCategory: value }),
  setHeaderImageSrc: (value: string) => set({ headerImageSrc: value }),
}));

export default useUiState;

type UiState = {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (value: string) => void;
}