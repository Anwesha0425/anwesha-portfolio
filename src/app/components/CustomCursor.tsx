"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Attach hover listeners to all clickable elements
    const clickables = document.querySelectorAll("a, button, input, textarea, select");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    // MutationObserver to attach to dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const newClickables = document.querySelectorAll("a, button, input, textarea, select");
          newClickables.forEach((el) => {
            el.removeEventListener("mouseenter", handleHoverStart);
            el.removeEventListener("mouseleave", handleHoverEnd);
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't render cursor on mobile devices
  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <>
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: "#06b6d4",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - (isHovering ? 20 : 16),
          y: mousePosition.y - (isHovering ? 20 : 16),
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? (isHovering ? 0.3 : 0.5) : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: isHovering ? "1px solid #7c3aed" : "2px solid #7c3aed",
          backgroundColor: isHovering ? "rgba(124, 58, 237, 0.2)" : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />
      <style>{`
        @media (min-width: 769px) {
          body * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
