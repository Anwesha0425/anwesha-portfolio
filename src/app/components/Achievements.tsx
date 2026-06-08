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

const achievements = [
  {
    platform: "LeetCode",
    emoji: "🟡",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.1)",
    colorBorder: "rgba(245, 158, 11, 0.25)",
    highlight: "Max Rating: 1717",
    details: [
      "Ranked 641 / 21,165 in Weekly Contest 378",
      "Ranked 2,444 / 24,517 in Contest 380",
    ],
    href: "https://leetcode.com/",
  },
  {
    platform: "Codeforces",
    emoji: "🔵",
    color: "#3b82f6",
    colorLight: "rgba(59, 130, 246, 0.1)",
    colorBorder: "rgba(59, 130, 246, 0.25)",
    highlight: "Max Rating: 1303",
    details: [
      "Achieved Pupil rank on Codeforces",
      "Active competitive programmer",
    ],
    href: "https://codeforces.com/",
  },
  {
    platform: "CodeChef",
    emoji: "⭐",
    color: "#8b5cf6",
    colorLight: "rgba(139, 92, 246, 0.1)",
    colorBorder: "rgba(139, 92, 246, 0.25)",
    highlight: "Max Rating: 1517",
    details: [
      "Ranked 669 / 20,041 in START133",
      "Consistent top performer",
    ],
    href: "https://www.codechef.com/",
  },
];

const certifications = [
  {
    title: "AlgoUtsav 2.0 Organizer",
    issuer: "Algorithmic & Programming Society, NIT Rourkela",
    description: "Led a cross-functional team of 15+ developers to organize NIT Rourkela's flagship ICPC-style national contest attracting 500+ participants.",
    color: "#7c3aed",
    emoji: "🏆",
  },
  {
    title: "DSA Workshop Conductor",
    issuer: "Algorithmic & Programming Society, NIT Rourkela",
    description: "Directed 10+ coding contests, DSA workshops, and guest lectures impacting over 1,000 students, strengthening campus programming culture.",
    color: "#06b6d4",
    emoji: "🎯",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section
      id="achievements"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.3rem 1rem",
              borderRadius: "9999px",
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#fbbf24",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Achievements
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
            Competitive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem" }}>
            Rankings and milestones across competitive programming platforms
          </p>
        </div>

        {/* Competitive programming cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="achievements-grid"
        >
          {achievements.map((ach, idx) => (
            <a
              key={ach.platform}
              href={ach.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "rgba(19, 19, 26, 0.85)",
                border: `1px solid ${ach.colorBorder}`,
                borderRadius: "1.25rem",
                padding: "1.75rem",
                backdropFilter: "blur(10px)",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${idx * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = `0 20px 40px ${ach.colorLight.replace("0.1", "0.25")}`;
                el.style.borderColor = ach.color + "55";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = ach.colorBorder;
              }}
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${ach.color}, ${ach.color}44)`,
                  borderRadius: "1.25rem 1.25rem 0 0",
                }}
              />

              {/* Emoji & Platform */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "0.75rem",
                    background: ach.colorLight,
                    border: `1px solid ${ach.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {ach.emoji}
                </div>
                <div>
                  <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.05rem" }}>
                    {ach.platform}
                  </div>
                </div>
              </div>

              {/* Rating highlight */}
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  background: ach.colorLight,
                  border: `1px solid ${ach.colorBorder}`,
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: ach.color,
                    display: "block",
                  }}
                >
                  {ach.highlight}
                </span>
              </div>

              {/* Details */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {ach.details.map((d) => (
                  <li
                    key={d}
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "flex-start",
                      color: "#64748b",
                      fontSize: "0.83rem",
                      lineHeight: 1.6,
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span style={{ color: ach.color, flexShrink: 0, marginTop: "0.2rem" }}>›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Certifications / Activity */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
          className="cert-grid"
        >
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              style={{
                background: "rgba(19, 19, 26, 0.85)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                backdropFilter: "blur(10px)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.5s ease ${0.3 + idx * 0.1}s`,
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "0.75rem",
                  background: `rgba(124, 58, 237, 0.1)`,
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                {cert.emoji}
              </div>
              <div>
                <h4 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                  {cert.title}
                </h4>
                <div style={{ color: "#a78bfa", fontSize: "0.8rem", fontWeight: 500, marginBottom: "0.6rem" }}>
                  {cert.issuer}
                </div>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
