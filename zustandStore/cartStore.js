import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  cartData: [],
  addData: (data) =>
    set((state) => ({ cartData: [...state.cartData, { data }] })),
});

store = devtools(store);
store = persist(store, { name: "cartData" });

export const useCartStore = create(store);
