"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

try {
  useGLTF.preload("/desktop_pc/scene.gltf");
} catch (error) {
  console.error("Error preloading 3D model:", error);
}

const ModelComputer = ({ isMobile = false }) => {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const computer = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    try {
      setMounted(true);
    } catch (error) {
      console.error("Error in ModelComputer useEffect:", error);
    }
  }, []);

  // Error boundary for rendering errors
  useEffect(() => {
    const handleError = (error) => {
      console.error("Error in ModelComputer rendering:", error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (!mounted) return null;
  
  if (hasError) {
    console.error("ModelComputer encountered an error loading the 3D model");
    return null;
  }

  try {
    return (
      <mesh>
        <hemisphereLight intensity={10} groundColor="black" />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.6 : 0.8}
          position={isMobile ? [0, -3, 0] : [0, -3, 0]}
          rotation={[-0.01, -0.8, -0.2]}
        />
      </mesh>
    );
  } catch (error) {
    console.error("Error rendering ModelComputer:", error);
    setHasError(true);
    return null;
  }
};

export default ModelComputer;