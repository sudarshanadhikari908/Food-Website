import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  homeData: {},
  addData: (data) =>
    set((state) => ({ homeData: { ...state.homeData, data } })),
});

const useHomeStore = create(devtools(store));
export default useHomeStore;
