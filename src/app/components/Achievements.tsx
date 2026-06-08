"use client";

import { motion, Variants } from "framer-motion";

const achievements = [
  {
    platform: "LeetCode",
    metric: "Max Rating 1717",
    desc: "Achieved top 5% global ranking globally. Solved 600+ algorithmic problems focusing on dynamic programming and graphs.",
    icon: "💻",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.1)",
    colorBorder: "rgba(245, 158, 11, 0.25)",
  },
  {
    platform: "Codeforces",
    metric: "Max Rating 1303 (Pupil)",
    desc: "Active participant in Division 2 and 3 contests, consistently improving problem-solving speed and accuracy.",
    icon: "📊",
    color: "#3b82f6",
    colorLight: "rgba(59, 130, 246, 0.1)",
    colorBorder: "rgba(59, 130, 246, 0.25)",
  },
  {
    platform: "CodeChef",
    metric: "Max Rating 1517 (2 Star)",
    desc: "Competed in multiple Starters and Long Challenges, demonstrating strong fundamentals in combinatorial mathematics.",
    icon: "👨‍🍳",
    color: "#8b5cf6",
    colorLight: "rgba(139, 92, 246, 0.1)",
    colorBorder: "rgba(139, 92, 246, 0.25)",
  },
];

export default function Achievements() {
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
      id="achievements"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
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
            Milestones
          </motion.span>
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Competitive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Programming
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            My journey through algorithmic problem solving and coding competitions.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {achievements.map((item) => (
            <motion.div
              key={item.platform}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: item.color + "88", boxShadow: `0 15px 35px ${item.colorLight.replace("0.1", "0.15")}` }}
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: `1px solid ${item.colorBorder}`,
                borderRadius: "1.25rem",
                padding: "2rem",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Background gradient blob */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: "150px",
                  height: "150px",
                  background: `radial-gradient(circle, ${item.colorLight} 0%, transparent 70%)`,
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "1rem",
                  background: item.colorLight,
                  border: `1px solid ${item.colorBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: "1.5rem",
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.25rem" }}>
                {item.platform}
              </h3>
              <div style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>
                {item.metric}
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
