import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch (disable custom cursor on touch devices)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Global event listeners for hover targets
    const handleHover = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        if (type === "view") {
          setCursorVariant("view");
          setCursorText("VIEW");
        } else if (type === "open") {
          setCursorVariant("open");
          setCursorText("OPEN");
        } else if (type === "explore") {
          setCursorVariant("explore");
          setCursorText("EXPLORE");
        } else if (type === "pointer") {
          setCursorVariant("pointer");
          setCursorText("");
        }
      } else {
        const clickable = e.target.closest("button, a, input, textarea, select");
        if (clickable) {
          setCursorVariant("pointer");
          setCursorText("");
        } else {
          setCursorVariant("default");
          setCursorText("");
        }
      }
    };

    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      transition: { type: "spring", mass: 0.1, stiffness: 800, damping: 35 }
    },
    pointer: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      mixBlendMode: "normal",
      transition: { type: "spring", mass: 0.15, stiffness: 600, damping: 30 }
    },
    view: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      width: 76,
      height: 76,
      backgroundColor: "#ffffff",
      color: "#000000",
      mixBlendMode: "normal",
      transition: { type: "spring", mass: 0.2, stiffness: 500, damping: 28 }
    },
    open: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      backgroundColor: "#ffffff",
      color: "#000000",
      mixBlendMode: "normal",
      transition: { type: "spring", mass: 0.2, stiffness: 500, damping: 28 }
    },
    explore: {
      x: mousePosition.x - 42,
      y: mousePosition.y - 42,
      width: 84,
      height: 84,
      backgroundColor: "#ffffff",
      color: "#000000",
      mixBlendMode: "normal",
      transition: { type: "spring", mass: 0.2, stiffness: 500, damping: 28 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center font-mono font-bold text-[10px] tracking-wider uppercase backdrop-blur-[1px]"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorText && (
        <span className="text-black font-extrabold select-none pointer-events-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
