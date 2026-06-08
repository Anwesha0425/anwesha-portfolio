"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    color: "#7c3aed",
    colorLight: "rgba(124, 58, 237, 0.1)",
    colorBorder: "rgba(124, 58, 237, 0.25)",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    color: "#06b6d4",
    colorLight: "rgba(6, 182, 212, 0.1)",
    colorBorder: "rgba(6, 182, 212, 0.25)",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Tailwind CSS", level: 88 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.1)",
    colorBorder: "rgba(245, 158, 11, 0.25)",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 72 },
      { name: "Firebase", level: 82 },
    ],
  },
  {
    category: "Developer Tools",
    icon: "🛠️",
    color: "#10b981",
    colorLight: "rgba(16, 185, 129, 0.1)",
    colorBorder: "rgba(16, 185, 129, 0.25)",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 80 },
      { name: "Bootstrap", level: 78 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span style={{ color: "#cbd5e1", fontSize: "0.88rem", fontWeight: 500 }}>{name}</span>
        <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{level}%</span>
      </div>
      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            width: animated ? `${level}%` : "0%",
            transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
        background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.03) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
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
          </span>
          <h2
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
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem" }}>
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skill cards grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              style={{
                background: "rgba(19, 19, 26, 0.85)",
                border: `1px solid ${group.colorBorder}`,
                borderRadius: "1.25rem",
                padding: "1.75rem",
                backdropFilter: "blur(10px)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${idx * 0.1}s`,
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.75rem",
                    background: group.colorLight,
                    border: `1px solid ${group.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    color: "#e2e8f0",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {group.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={i * 100 + idx * 150}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack icon row */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "rgba(19, 19, 26, 0.6)",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            borderRadius: "1.25rem",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#475569",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Core Stack
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            {[
              { name: "React", emoji: "⚛️" },
              { name: "Next.js", emoji: "▲" },
              { name: "TypeScript", emoji: "🔷" },
              { name: "Node.js", emoji: "🟢" },
              { name: "MongoDB", emoji: "🍃" },
              { name: "Firebase", emoji: "🔥" },
              { name: "Tailwind", emoji: "💨" },
              { name: "Git", emoji: "🌿" },
              { name: "Vercel", emoji: "▲" },
              { name: "REST API", emoji: "🔗" },
            ].map((tech) => (
              <div
                key={tech.name}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(124, 58, 237, 0.07)",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  color: "#94a3b8",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(124, 58, 237, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.color = "#c4b5fd";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(124, 58, 237, 0.07)";
                  (e.currentTarget as HTMLDivElement).style.color = "#94a3b8";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.15)";
                }}
              >
                <span>{tech.emoji}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
