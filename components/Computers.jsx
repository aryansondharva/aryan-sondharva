"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import ModelLoader from "./ModelLoader";
import ModelComputer from "./ModelComputer";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    try {
      setMounted(true);
      
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);

      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        try {
          setIsMobile(event.matches);
        } catch (error) {
          console.error("Error in handleMediaQueryChange:", error);
        }
      };

      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Remove the listener when the component is unmounted
      return () => {
        try {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        } catch (error) {
          console.error("Error removing media query listener:", error);
        }
      };
    } catch (error) {
      console.error("Error in Computers useEffect:", error);
      setHasError(true);
    }
  }, []);
  
  // Error boundary fallback
  if (hasError) {
    console.error("Computers component encountered an error and is showing fallback UI");
  }

  return (
    <Suspense fallback={<ModelLoader />}>
      <Canvas
        key={canvasKey}
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [24, 3, 20], fov: 25 }}
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
        style={{ background: "transparent" }}
        className="z-1"
        onError={(error) => {
          console.error("Canvas error:", error);
          setHasError(true);
        }}
        onCreated={({ gl, scene, camera }) => {
          try {
            console.log("Canvas created successfully");
            const canvas = gl.domElement;
            try { gl.setClearColor(0x000000, 0); } catch {}
            const handleLost = (event) => {
              try {
                event.preventDefault();
              } catch {}
              console.warn("WebGL context lost, remounting canvas");
              setCanvasKey((k) => k + 1);
            };
            const handleRestored = () => {
              console.log("WebGL context restored, remounting canvas");
              setCanvasKey((k) => k + 1);
            };
            canvas.addEventListener("webglcontextlost", handleLost, false);
            canvas.addEventListener("webglcontextrestored", handleRestored, false);
          } catch (error) {
            console.error("Error in Canvas onCreated:", error);
          }
        }}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ModelComputer isMobile={isMobile} />
        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default ComputersCanvas;