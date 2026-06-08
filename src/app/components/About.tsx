"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Operating Systems",
  "Database Management Systems",
  "Design & Analysis of Algorithms",
  "Computer Networks",
];

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "1717", label: "LeetCode Max Rating" },
  { value: "500+", label: "Contest Participants Led" },
  { value: "1000+", label: "Students Impacted" },
];

export default function About() {
  const { ref, inView } = useInView();

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
            About Me
          </span>
          <h2
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
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <div>
            <p
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
            </p>
            <p
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
            </p>

            {/* Education card */}
            <div
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "2rem",
                backdropFilter: "blur(10px)",
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
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                {
                  icon: "📍",
                  text: "Brahmapur, Odisha, India",
                },
                {
                  icon: "📞",
                  text: "+91 7978963126",
                  href: "tel:+917978963126",
                },
                {
                  icon: "✉️",
                  text: "anwesharanigouda@gmail.com",
                  href: "mailto:anwesharanigouda@gmail.com",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: "#94a3b8", textDecoration: "none" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(19, 19, 26, 0.8)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    animationDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.5)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(124, 58, 237, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.2)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
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
                </div>
              ))}
            </div>

            {/* Extracurricular card */}
            <div
              style={{
                background: "rgba(19, 19, 26, 0.8)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                backdropFilter: "blur(10px)",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
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
            </div>
          </div>
        </div>
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
