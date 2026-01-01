"use client";

import useLoaderStore from "@/stores/loader";
import { useEffect } from "react";
import { useProgress } from "@react-three/drei";

// Retain component for compatibility; it now only updates the store
const ModelLoader = () => {
  const { progress } = useProgress();
  const [setIsLoading, setLoadingState] = useLoaderStore((state) => [
    state.setIsLoading,
    state.setLoadingState,
  ]);

  useEffect(() => {
    const pct = Number.isFinite(progress) ? Math.floor(progress) : 0;
    setIsLoading(pct);
    if (progress >= 100) setLoadingState(false);
  }, [progress, setIsLoading, setLoadingState]);

  return null;
};

export default ModelLoader;
