"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React Developer",
  "Competitive Programmer",
  "Open Source Builder",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((c) => (c + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, x: 60 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 1.5rem 0", // Added top padding for navbar
      }}
    >
      {/* Ambient orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "5%", left: "-5%",
          width: "550px", height: "550px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "5%", right: "5%",
          width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}
      />

      {/* Grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.4rem 1rem", borderRadius: "9999px",
                background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa", fontSize: "0.82rem", fontWeight: 600,
                marginBottom: "1.5rem",
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} style={{ color: "#94a3b8", fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>
              Hi there, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#e2e8f0" }}>Anwesha</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 60%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Rani Gouda
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} style={{ height: "2.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "#64748b", fontWeight: 500 }}>
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  style={{ display: "inline-block", width: 3, height: "1.2em", background: "#7c3aed", marginLeft: 2, verticalAlign: "middle", borderRadius: 2 }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} style={{
              color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8,
              maxWidth: "540px", marginBottom: "2.5rem",
            }}>
              B.Tech Electrical Engineering @ <span style={{ color: "#a78bfa", fontWeight: 600 }}>NIT Rourkela</span>. I craft fast, beautiful web apps with{" "}
              <span style={{ color: "#22d3ee", fontWeight: 600 }}>React</span>,{" "}
              <span style={{ color: "#22d3ee", fontWeight: 600 }}>Next.js</span> &amp; the{" "}
              <span style={{ color: "#22d3ee", fontWeight: 600 }}>MERN stack</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "0.9rem 2rem", borderRadius: "9999px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
              <motion.a
                href="https://github.com/Anwesha0425"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "0.9rem 2rem", borderRadius: "9999px",
                  background: "transparent", color: "#e2e8f0",
                  textDecoration: "none", fontWeight: 600, fontSize: "0.95rem",
                  border: "1px solid rgba(124,58,237,0.4)",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                GitHub
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { href: "mailto:anwesharanigouda@gmail.com", label: "Email", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                { href: "https://linkedin.com/in/Anwesha", label: "LinkedIn", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                { href: "https://github.com/Anwesha0425", label: "GitHub", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94a3b8", textDecoration: "none",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{ position: "relative" }}
            className="hero-image-wrapper"
          >
            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)",
                zIndex: 0,
              }}
            />
            {/* Inner border */}
            <div style={{
              position: "absolute", inset: 2, borderRadius: "50%",
              background: "var(--color-bg)", zIndex: 1,
            }} />
            {/* Photo */}
            <div style={{
              position: "relative", zIndex: 2,
              width: 320, height: 320, borderRadius: "50%", overflow: "hidden",
            }}>
              <Image
                src="/avatar.png"
                alt="Anwesha Rani Gouda"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", bottom: -10, left: -20, zIndex: 3,
                background: "rgba(19,19,26,0.95)",
                border: "1px solid rgba(124,58,237,0.35)",
                borderRadius: "1rem", padding: "0.6rem 1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 24px rgba(124,58,237,0.2)",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>🏆</span>
              <div>
                <div style={{ color: "#e2e8f0", fontSize: "0.75rem", fontWeight: 700 }}>LeetCode</div>
                <div style={{ color: "#f59e0b", fontSize: "0.7rem", fontWeight: 600 }}>Rating 1717</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute", top: 10, right: -24, zIndex: 3,
                background: "rgba(19,19,26,0.95)",
                border: "1px solid rgba(6,182,212,0.35)",
                borderRadius: "1rem", padding: "0.6rem 1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 24px rgba(6,182,212,0.2)",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>💻</span>
              <div>
                <div style={{ color: "#e2e8f0", fontSize: "0.75rem", fontWeight: 700 }}>10+ Projects</div>
                <div style={{ color: "#22d3ee", fontSize: "0.7rem", fontWeight: 600 }}>Built & Shipped</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem",
          color: "#475569", fontSize: "0.72rem",
        }}
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 24, height: 40,
            border: "2px solid rgba(124,58,237,0.3)",
            borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6,
          }}
        >
          <div style={{ width: 4, height: 8, background: "#7c3aed", borderRadius: 2 }} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-image-wrapper { width: 220px !important; height: 220px !important; margin: 0 auto; }
          .hero-image-wrapper > div:nth-child(3) { width: 220px !important; height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
