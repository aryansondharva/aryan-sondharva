import { create } from "zustand";

const useLoaderStore = create((set) => ({
  loading: 0,
  loadingState: true,
  setIsLoading: (load) => set((state) => ({ loading: load })),
  setLoadingState: (active) => set((state) => ({ loadingState: active })),
}));

export default useLoaderStore;
