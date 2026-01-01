"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";

import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Update visibility state for styling
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    // Handle navbar show/hide based on scroll direction
    const currentScrollY = latest;
    const scrollDifference = currentScrollY - lastScrollY;
    
    // Always show navbar at the top of the page
    if (currentScrollY <= 50) {
      setIsNavbarVisible(true);
    } else {
      // Only hide/show based on scroll direction when not at top
      if (Math.abs(scrollDifference) > 3) { // Reduced threshold for more responsive behavior
        if (scrollDifference > 0 && currentScrollY > 100) {
          // Scrolling down - hide navbar
          setIsNavbarVisible(false);
        } else if (scrollDifference < 0) {
          // Scrolling up - show navbar
          setIsNavbarVisible(true);
        }
      }
    }
    
    setLastScrollY(currentScrollY);
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 z-40 w-full", className)}
      animate={{
        y: isNavbarVisible ? 0 : -100,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible, isNavbarVisible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, isNavbarVisible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 2px 8px rgba(0, 0, 0, 0.1)"
          : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-[1800px] flex-row items-center justify-between self-start px-6 py-4 lg:flex",
        visible && "bg-white/95 border border-gray-200",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible, isNavbarVisible })
          : child
      )}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, visible }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-end space-x-8 font-medium transition duration-200",
        className
      )}
    >
      {items.map((item, idx) => (
        <button
          onMouseEnter={() => setHovered(idx)}
          onClick={item.onClick || onItemClick}
          className={cn("relative px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-orange-500", visible ? "text-gray-300" : "text-white")}
          key={`link-${idx}`}
        >
          <span className="relative z-20">{item.name}</span>
        </button>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible, isNavbarVisible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible, isNavbarVisible })
          : child
      )}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className, visible }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-[120px] z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, visible }) => {
  return isOpen ? (
    <IconX className={cn("text-white", visible && "text-black")} onClick={onClick} />
  ) : (
    <IconMenu2 className={cn("text-white", visible && "text-black")} onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <div
      className="relative z-20 flex items-center space-x-2"
    >
      <span className="text-xl font-bold text-white">Aryan Sondharva</span>
    </div>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible = false,
  isNavbarVisible,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button text-black text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-300 inline-block text-center font-josefin-sans uppercase";

  const variantStyles = {
    ghost: "bg-transparent",
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] bg-primary rounded-full text-white",
    outline: visible 
      ? "border border-black rounded-full bg-black text-white hover:bg-transparent hover:text-black" 
      : "border border-black rounded-full bg-white text-black hover:text-white hover:bg-transparent hover:border-white",
    secondary: "bg-transparent border border-transparent shadow-none hover:text-primary hover:border rounded-full hover:border-primary",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
