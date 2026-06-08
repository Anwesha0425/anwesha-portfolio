"use client";

import { motion, Variants } from "framer-motion";

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Operating Systems",
  "Database Management Systems",
  "Design & Analysis of Algorithms",
  "Computer Networks",
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "1717", label: "LeetCode Max Rating" },
  { value: "500+", label: "Contest Participants Led" },
  { value: "1000+", label: "Students Impacted" },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="about"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.span
            variants={itemVariants}
            style={{
              display: "inline-block",
              padding: "0.3rem 1rem",
              borderRadius: "9999px",
              background: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
              color: "#a78bfa",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              letterSpacing: "-0.02em",
            }}
          >
            Turning ideas into{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              digital experiences
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <div>
            <motion.p
              variants={itemVariants}
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: "1.05rem",
                marginBottom: "1.5rem",
              }}
            >
              I&apos;m a passionate Full-Stack Developer pursuing B.Tech in Electrical Engineering 
              at{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                National Institute of Technology, Rourkela
              </span>{" "}
              (Nov 2022 – Jun 2026). I love crafting seamless user experiences and 
              building robust backend systems.
            </motion.p>
            <motion.p
              variants={itemVariants}
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: "1.05rem",
                marginBottom: "2rem",
              }}
            >
              From architecting real-time dashboards with Firebase to building e-commerce 
              platforms with personalized recommendation engines — I thrive where complex 
              problems meet elegant solutions.
            </motion.p>

            {/* Education card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(124, 58, 237, 0.4)", boxShadow: "0 10px 30px rgba(124, 58, 237, 0.1)" }}
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "0.75rem",
                    background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  🎓
                </div>
                <div>
                  <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.95rem" }}>
                    National Institute of Technology, Rourkela
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                    B.Tech in Electrical Engineering · 2022–2026
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#a78bfa",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Relevant Coursework
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {coursework.map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                      color: "#94a3b8",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { icon: "📍", text: "Brahmapur, Odisha, India" },
                { icon: "📞", text: "+91 7978963126", href: "tel:+917978963126" },
                { icon: "✉️", text: "anwesharanigouda@gmail.com", href: "mailto:anwesharanigouda@gmail.com" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#94a3b8", fontSize: "0.9rem" }}>
                  <span>{item.icon}</span>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      style={{ color: "#94a3b8", textDecoration: "none" }}
                      whileHover={{ color: "#a78bfa", x: 4 }}
                    >
                      {item.text}
                    </motion.a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(124, 58, 237, 0.5)",
                    boxShadow: "0 12px 30px rgba(124, 58, 237, 0.15)",
                    scale: 1.02,
                  }}
                  style={{
                    background: "rgba(19, 19, 26, 0.8)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extracurricular card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.4)", boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)" }}
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h3
                style={{
                  color: "#22d3ee",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                🏆 Leadership & Activities
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    background: "rgba(6, 182, 212, 0.05)",
                    border: "1px solid rgba(6, 182, 212, 0.1)",
                  }}
                >
                  <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                    Algorithmic & Programming Society, NIT Rourkela
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "0.4rem" }}>
                    Technical Team Coordinator · Oct 2023 – Present
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.78rem" }}>
                    Led 15+ developers · Organized AlgoUtsav 2.0 with 500+ participants · Conducted 10+ coding contests
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
