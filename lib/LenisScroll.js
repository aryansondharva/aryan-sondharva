"use client";

import useIsMobileStore from "@/stores/isMobileStore";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

export default function LenisScroll() {
  const [setIsMobile] = useIsMobileStore((state) => [state.setIsMobile]);
  const requestRef = useRef();

  useEffect(() => {
    // Skip if running on server
    if (typeof window === "undefined") return;

    // Create Lenis instance with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for better performance
    });

    // Set up animation frame
    const raf = (time) => {
      lenis.raf(time);
      requestRef.current = requestAnimationFrame(raf);
    };
    requestRef.current = requestAnimationFrame(raf);

    // Handle mobile detection
    const mediaQuery = window.matchMedia("(max-width: 425px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function
    return () => {
      cancelAnimationFrame(requestRef.current);
      lenis.destroy();
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [setIsMobile]);

  return <Toaster />;
}
