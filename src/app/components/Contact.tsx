"use client";

import { useState, useRef, useEffect } from "react";

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

const contactLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "anwesharanigouda@gmail.com",
    href: "mailto:anwesharanigouda@gmail.com",
    color: "#7c3aed",
    colorLight: "rgba(124, 58, 237, 0.1)",
    colorBorder: "rgba(124, 58, 237, 0.25)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 011 1.22 2 2 0 012.98.02L6 0a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.9a16 16 0 006.19 6.19l1.06-1.34a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 7978963126",
    href: "tel:+917978963126",
    color: "#06b6d4",
    colorLight: "rgba(6, 182, 212, 0.1)",
    colorBorder: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/Anwesha",
    href: "https://linkedin.com/in/Anwesha",
    color: "#0077b5",
    colorLight: "rgba(0, 119, 181, 0.1)",
    colorBorder: "rgba(0, 119, 181, 0.25)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Anwesha0425",
    href: "https://github.com/Anwesha0425",
    color: "#e2e8f0",
    colorLight: "rgba(226, 232, 240, 0.07)",
    colorBorder: "rgba(226, 232, 240, 0.15)",
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:anwesharanigouda@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "0.75rem",
    background: focused === field ? "rgba(124, 58, 237, 0.06)" : "rgba(19, 19, 26, 0.8)",
    border: `1px solid ${focused === field ? "rgba(124, 58, 237, 0.5)" : "rgba(124, 58, 237, 0.2)"}`,
    color: "#e2e8f0",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
    boxShadow: focused === field ? "0 0 0 3px rgba(124, 58, 237, 0.1)" : "none",
  });

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem 5rem",
        position: "relative",
      }}
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
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
            Contact
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
            Let&apos;s Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Together
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Open to internships, project collaborations, and exciting opportunities. Don&apos;t hesitate to reach out!
          </p>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "2.5rem",
            alignItems: "start",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <div>
            <h3
              style={{
                color: "#e2e8f0",
                fontWeight: 700,
                fontSize: "1.15rem",
                marginBottom: "1.5rem",
              }}
            >
              Get in touch
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "1rem",
                    background: "rgba(19, 19, 26, 0.85)",
                    border: `1px solid ${link.colorBorder}`,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateX(6px)";
                    el.style.background = link.colorLight;
                    el.style.boxShadow = `0 8px 20px ${link.colorLight}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateX(0)";
                    el.style.background = "rgba(19, 19, 26, 0.85)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "0.75rem",
                      background: link.colorLight,
                      border: `1px solid ${link.colorBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: link.color,
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 500, marginBottom: "0.1rem" }}>
                      {link.label}
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "1rem",
                background: "rgba(19, 19, 26, 0.6)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>📍</span>
              <div>
                <div style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 500 }}>Location</div>
                <div style={{ color: "#e2e8f0", fontSize: "0.88rem" }}>Brahmapur, Odisha, India</div>
              </div>
            </div>
          </div>

          {/* Right: Message form */}
          <div
            style={{
              background: "rgba(19, 19, 26, 0.85)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "1.5rem",
              padding: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.15rem", marginBottom: "1.5rem" }}>
              Send a message
            </h3>

            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(34, 197, 94, 0.1)",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  ✅
                </div>
                <div>
                  <div style={{ color: "#22c55e", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                    Message opened in email!
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem" }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.4rem" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.4rem" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.4rem" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: "130px",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "0.9rem 1.5rem",
                    borderRadius: "0.75rem",
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    fontFamily: "inherit",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(124, 58, 237, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 15px rgba(124, 58, 237, 0.3)";
                  }}
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(124, 58, 237, 0.1)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.85rem" }}>
            © 2025 Anwesha Rani Gouda. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
