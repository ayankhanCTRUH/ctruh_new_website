import { create } from "zustand";

const store = create((set) => ({
  navDark: null,
  setNavDark: (state) => set({ navDark: state }),
}));

export default store;
