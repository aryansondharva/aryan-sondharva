"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useCallback } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LinkPreview } from "./ui/link-preview";
import { projects } from "@/constants";

const MyProjects = () => {
  const goToLink = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  return (
    <div id="myprojects_wrapper">
      <div className="text-center">
        <h1 className="header-h">My Works</h1>
        <p className="md:text-4xl text-lg">
          How I applied skills in real-world?
        </p>
      </div>

      <div className="myprojects_body max-w-7xl w-full">
        <div className="myprojects_cards px-[4%]">
          <AnimatePresence>
            {projects.map((item, index) => (
              <motion.div
                className="myprojects_card"
                key={index}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "tween",
                }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="myprojects_card_img">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    loading="lazy"
                    alt="project"
                  />
                </div>
                <div className="myprojects_card_body">
                  <div className="myprojects_card_header">
                    <div className="myprojects_card_title">
                      <h1>{item.name}</h1>

                      <LinkPreview url={item.url} className="font-bold">
                        <FaExternalLinkAlt className="myprojects_card_icon" />
                      </LinkPreview>
                    </div>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <div className="my_projects_card_tags">
                      {item.tags.map((tag, index) => (
                        <div className="my_projects_card_tag" key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    {item.inspiration && (
                      <span className="text-[16px]">
                        Inspired by {item.inspiration}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-[4rem]">
        <a href="https://projects.aryansondharva.in" target="_blank" className="text-base md:text-lg lg:text-xl border-2 border-black text-black hover:text-white hover:bg-black duration-300 ease-in-out px-8 py-4 rounded-full">See All Projects</a>
      </div>
      
    </div>
  );
};

export default MyProjects;
