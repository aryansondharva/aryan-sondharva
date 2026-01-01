"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollIndicatior = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div style={{ position: "fixed", top: "0", left: "0", zIndex: "9999999" }}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default ScrollIndicatior;
