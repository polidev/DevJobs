import { create } from "zustand";

export const useAuthStore = create((set) => ({
  // Estado
  isLoggedIn: false,

  // Acciones
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
}));
