"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    category: "Tools & Databases",
    icon: "🛠️",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Firebase", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Core Stack",
    icon: "🚀",
    isTags: true,
    items: [
      { name: "MERN Stack" },
      { name: "REST APIs" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Object Oriented Design" },
      { name: "Database Design" },
      { name: "Agile Development" },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="skills"
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
            Skills
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
            My Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{ color: "#64748b", fontSize: "1rem" }}>
            Technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(124, 58, 237, 0.4)", boxShadow: "0 10px 30px rgba(124, 58, 237, 0.1)" }}
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                borderRadius: "1.25rem",
                padding: "2rem",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "1rem",
                    background: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#e2e8f0" }}>
                  {category.category}
                </h3>
              </div>

              {category.isTags ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {category.items.map((item, i) => (
                    <motion.span
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                      style={{
                        padding: "0.4rem 0.85rem",
                        borderRadius: "0.5rem",
                        background: "rgba(124, 58, 237, 0.1)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        color: "#c4b5fd",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {category.items.map((item, i) => (
                    <div key={item.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.4rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{item.name}</span>
                        <span style={{ color: "#64748b" }}>{item.level}%</span>
                      </div>
                      <div
                        style={{
                          height: "6px",
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "9999px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          style={{
                            height: "100%",
                            background: idx % 2 === 0
                              ? "linear-gradient(90deg, #7c3aed, #a78bfa)"
                              : "linear-gradient(90deg, #06b6d4, #22d3ee)",
                            borderRadius: "9999px",
                            boxShadow: idx % 2 === 0
                              ? "0 0 10px rgba(124, 58, 237, 0.5)"
                              : "0 0 10px rgba(6, 182, 212, 0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
