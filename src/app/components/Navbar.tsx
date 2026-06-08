"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 10, 15, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.15)" : "none",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          ARG
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "#fff" : "rgba(226,232,240,0.7)",
                    background: isActive
                      ? "rgba(124, 58, 237, 0.25)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(124, 58, 237, 0.4)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "#fff";
                      (e.target as HTMLAnchorElement).style.background =
                        "rgba(124, 58, 237, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color =
                        "rgba(226,232,240,0.7)";
                      (e.target as HTMLAnchorElement).style.background =
                        "transparent";
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="nav-cta"
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            color: "#fff",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.transform = "translateY(-1px)";
            (e.target as HTMLAnchorElement).style.boxShadow =
              "0 6px 20px rgba(124, 58, 237, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.target as HTMLAnchorElement).style.boxShadow =
              "0 4px 15px rgba(124, 58, 237, 0.3)";
          }}
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#e2e8f0",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#e2e8f0",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#e2e8f0",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#e2e8f0",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10, 10, 15, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(124, 58, 237, 0.15)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                color: "rgba(226,232,240,0.8)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "0.5rem",
                marginBottom: "0.25rem",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
