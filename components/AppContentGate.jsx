"use client";

import useLoaderStore from "@/stores/loader";
import { usePathname } from "next/navigation";

const AppContentGate = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loadingState] = useLoaderStore((state) => [state.loadingState]);

  // Render children but keep them visually hidden until loadingState is false
  return (
    <div style={{ visibility: isHome && loadingState ? "hidden" : "visible" }}>
      {children}
    </div>
  );
};

export default AppContentGate;


