import create from "zustand";
import { devtools } from "zustand/middleware";

let store = (set) => ({
  searchTypeData: "",
  addData: (type) =>
    set((state) => ({ searchtypeData: state.searchTypeData, type })),
});

export const useSearchTypeStore = create(devtools(store));
