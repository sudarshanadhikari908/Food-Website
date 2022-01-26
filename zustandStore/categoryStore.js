import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  categoryData: {},
  addData: (data) =>
    set((state) => ({ categoryData: { ...state.categoryData, data } })),
});

store = devtools(store);
store = persist(store, { name: "categoryData" });

// const useCategoryStore = create(devtools(store));
export const useCategoryStore = create(store);
