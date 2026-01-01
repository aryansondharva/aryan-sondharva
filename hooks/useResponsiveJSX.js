"use client";

import { useEffect, useState, useMemo } from "react";

export const useResponsiveJSX = (breakpoints) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Sort breakpoints for reliable comparisons
  const sortedBreakpoints = useMemo(
    () => [...breakpoints].sort((a, b) => a - b),
    [breakpoints]
  );

  useEffect(() => {
    // Skip if running on server
    if (typeof window === "undefined") return;

    // Debounce function to limit resize event handler calls
    let timeoutId = null;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100); // Debounce for 100ms
    };

    // Set initial width
    setWidth(window.innerWidth);

    // Add event listener with passive option for better performance
    window.addEventListener("resize", handleResize, { passive: true });

    // Clean up
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate index based on current width
  const index = useMemo(() => {
    const newIndex = sortedBreakpoints.findIndex((bp) => width <= bp);
    return newIndex === -1 ? sortedBreakpoints.length : newIndex;
  }, [width, sortedBreakpoints]);

  return index;
};
