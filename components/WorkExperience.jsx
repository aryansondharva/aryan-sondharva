"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { experience } from "@/constants";
import { useResponsiveJSX } from "@/hooks/useResponsiveJSX";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headerRef = useRef(null);
  const breakpoint = useResponsiveJSX([425]);
  const isMobile = breakpoint === 0;
  const itemWidth = isMobile ? 360 : 480; // Width of each experience item
  const totalWidth = useMemo(() => experience.length * itemWidth, [itemWidth]);

  useEffect(() => {
    // Pin the entire section for horizontal scroll effect
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${totalWidth}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${totalWidth}px bottom`,
          scrub: 1,
          pin: true,
          markers: false,
        },
      }
    );

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top",
      end: `${totalWidth + 600} top`,
      scrub: true,
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalWidth]);

  return (
    <section className="scroll-section-outer" id="workexperience">
      <div ref={triggerRef}>
        <div className="scroll-section-inner w-[5300px] flex items-center justify-center h-full">
          <div className="scroll-section px-[8vw] w-full flex flex-col">
            <div
              ref={headerRef}
              className="mb-[4rem] z-10"
              style={{ paddingTop: "5rem" }}
            >
              <h1 className="header-h mb-[1.2rem]">Work Experience</h1>
              <span className="text-lg md:text-4xl">What have i done so far? 🤔?</span>
            </div>

            <div ref={sectionRef} className="experience_timeline">
              <div
                className={cn(
                  "timeline_line h-2 bg-[#000000] rounded-full",
                )}
                style={{
                  width: `${experience.length * 580}px`,
                }}
                ></div>
              <motion.div className="timeline_cards flex mt-[2rem]">
                {experience.map((item, index) => (
                  <motion.div
                    className="timeline_card max-w-[380px] md:min-w-[500px] md:max-w-[600px] bg-[#000] mr-[1rem] md:mr-[2rem] lg:mr-[4rem] mt-2 rounded-lg relative text-[#fff]"
                    key={index}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.06,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="absolute w-2 h-4 bg-[#000] left-[50%] top-[-2.8rem] rounded-full"
                      style={{ transform: "translateX(-50%)" }}
                    ></div>
                    <div
                      className="absolute top-[-1.8rem] left-[50%] text-[#000]"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      {item.date}
                    </div>
                    <div className="p-[3%] experience_card">
                      <div className="bg-[rgba(255,255,255,0.6)] text-[#000] rounded py-2 animate-pulse mb-4 flex justify-center items-center">
                        {item.category}
                      </div>
                      <h2 className="text-xl md:text-2xl tracking-wider">{item.title}</h2>
                      <h4 className="mb-4 mt-2 tracking-wider text-base md:text-lg">
                        {item.subtitle}
                      </h4>
                      <span className="tracking-wide text-base md:text-lg">{item.description}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
