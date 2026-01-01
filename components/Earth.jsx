"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ModelLoader from "./ModelLoader";

try {
  useGLTF.preload("/planet/scene.gltf");
} catch (error) {
  console.error("Error preloading 3D earth model:", error);
}

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [mounted, setMounted] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server side
  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <Canvas
      key={canvasKey}
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ powerPreference: "high-performance", antialias: false, alpha: true }}
      style={{ background: "transparent" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<ModelLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
