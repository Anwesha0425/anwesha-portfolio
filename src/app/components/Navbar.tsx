"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      let currentSection = "";
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection = section.id;
          }
        }
      });

      // Special case for hero (top of page)
      if (window.scrollY < 100) {
        currentSection = "hero";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: isScrolled ? "rgba(9, 9, 11, 0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              textDecoration: "none",
              color: "#e2e8f0",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              A
            </div>
            Anwesha.
          </motion.a>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "0.4rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.05)" }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    color: activeSection === item.href.replace("#", "") ? "#fff" : "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: activeSection === item.href.replace("#", "") ? 600 : 500,
                    borderRadius: "9999px",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(124, 58, 237, 0.2)",
                        borderRadius: "9999px",
                        border: "1px solid rgba(124, 58, 237, 0.5)",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "9999px",
                background: "rgba(124, 58, 237, 0.1)",
                color: "#a78bfa",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                border: "1px solid rgba(124, 58, 237, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#7c3aed";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124, 58, 237, 0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
              }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-nav-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#e2e8f0",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              background: "rgba(9, 9, 11, 0.95)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 999,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  padding: "1rem",
                  color: activeSection === item.href.replace("#", "") ? "#fff" : "#94a3b8",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: activeSection === item.href.replace("#", "") ? 600 : 500,
                  borderRadius: "0.75rem",
                  background: activeSection === item.href.replace("#", "") ? "rgba(124, 58, 237, 0.1)" : "transparent",
                  border: activeSection === item.href.replace("#", "") ? "1px solid rgba(124, 58, 237, 0.3)" : "1px solid transparent",
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              style={{
                padding: "1rem",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "0.75rem",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
