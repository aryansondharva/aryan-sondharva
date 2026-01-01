import { create } from "zustand";

const useIsMobileStore = create((set) => ({
  isMobile: false, // Default to false and set dynamically on client
  setIsMobile: (active) => set({ isMobile: active }),
}));

export default useIsMobileStore;
