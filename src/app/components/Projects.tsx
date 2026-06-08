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

const projects = [
  {
    title: "Phoenix",
    subtitle: "Centralized Developer Learning Hub",
    date: "May 2025",
    emoji: "🔥",
    color: "#7c3aed",
    colorLight: "rgba(124, 58, 237, 0.1)",
    colorBorder: "rgba(124, 58, 237, 0.25)",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Firebase"],
    points: [
      "Engineered a centralized learning hub with Firebase Authentication & Firestore, delivering customized developer dashboards for streamlined learning and progress tracking.",
      "Integrated Codeforces & LeetCode RESTful APIs to dynamically aggregate and visualize algorithmic metrics, including contest rankings and problem-solving history.",
      "Architected an interactive educational module with comprehensive CS fundamentals, top 100 technical interview questions, and a live chatroom for 50+ concurrent users.",
    ],
    liveUrl: "https://phoenix-woad-ten.vercel.app/",
    githubUrl: "https://github.com/Anwesha0425/Phoenix",
  },
  {
    title: "AdyamShilp",
    subtitle: "E-Commerce Web Application",
    date: "January 2025",
    emoji: "🛒",
    color: "#06b6d4",
    colorLight: "rgba(6, 182, 212, 0.1)",
    colorBorder: "rgba(6, 182, 212, 0.25)",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Developed a full-stack e-commerce platform with React.js, delivering a visually rich, highly responsive user interface with seamless product discovery.",
      "Implemented a real-time personalized recommendation engine using React Context and LocalStorage with a custom multi-signal scoring algorithm (recency decay, price affinity, category weighting).",
      "Built an end-to-end admin dashboard with Express.js and React, automating price and inventory management to improve operational efficiency.",
    ],
    liveUrl: "https://adyam-shilp.vercel.app/",
    githubUrl: "https://github.com/Anwesha0425/Adyam_Shilp",
  },
  {
    title: "Appex",
    subtitle: "NGO Management Platform",
    date: "December 2024",
    emoji: "🌿",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.1)",
    colorBorder: "rgba(245, 158, 11, 0.25)",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    points: [
      "Designed and deployed a responsive NGO management platform using Next.js and Tailwind CSS, enhancing accessibility and streamlining organizational workflows.",
      "Modularized 7+ reusable UI components (profile cards, buttons, panels) to reduce code duplication and accelerate development cycles.",
      "Optimized front-end logic for real-time NGO operations, enabling smooth task management and data synchronization through efficient React state management.",
    ],
    liveUrl: "https://project-appex.vercel.app/",
    githubUrl: "https://github.com/Anwesha0425/Project-Appex",
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      style={{
        padding: "7rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
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
            Projects
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
            Things I&apos;ve{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            From concept to deployment — real-world projects with measurable impact.
          </p>
        </div>

        {/* Project cards */}
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              style={{
                background: "rgba(19, 19, 26, 0.85)",
                border: `1px solid ${project.colorBorder}`,
                borderRadius: "1.25rem",
                padding: "2rem",
                backdropFilter: "blur(10px)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${idx * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 20px 50px ${project.colorLight.replace("0.1", "0.2")}`;
                el.style.borderColor = project.color + "55";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = project.colorBorder;
              }}
            >
              {/* Glow accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle at top right, ${project.colorLight}, transparent 70%)`,
                  borderRadius: "0 1.25rem 0 0",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "1rem",
                        background: project.colorLight,
                        border: `1px solid ${project.colorBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.6rem",
                        flexShrink: 0,
                      }}
                    >
                      {project.emoji}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#e2e8f0",
                          marginBottom: "0.15rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{project.subtitle}</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(100, 116, 139, 0.1)",
                        border: "1px solid rgba(100, 116, 139, 0.2)",
                        color: "#64748b",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                      }}
                    >
                      {project.date}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${project.title}`}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "0.75rem",
                        background: "rgba(124, 58, 237, 0.1)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#94a3b8",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124, 58, 237, 0.2)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124, 58, 237, 0.1)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "0.75rem",
                        background: project.colorLight,
                        border: `1px solid ${project.colorBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: project.color,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.3rem 0.75rem",
                        borderRadius: "9999px",
                        background: project.colorLight,
                        border: `1px solid ${project.colorBorder}`,
                        color: project.color,
                        fontSize: "0.78rem",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        color: "#94a3b8",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: project.color,
                          flexShrink: 0,
                          marginTop: "0.55rem",
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
