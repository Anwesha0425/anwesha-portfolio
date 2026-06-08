"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "904195c8-5545-4939-a613-27b50fff9d78",
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form error:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" style={{ padding: "7rem 1.5rem 4rem", position: "relative" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          style={{ background: "rgba(19, 19, 26, 0.8)", border: "1px solid rgba(124, 58, 237, 0.2)", borderRadius: "1.5rem", padding: "4rem 2rem", textAlign: "center", backdropFilter: "blur(10px)", position: "relative", overflow: "hidden" }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px)`, backgroundSize: "40px 40px", opacity: 0.5, pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
            <motion.h2 variants={itemVariants} style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 900, color: "#e2e8f0", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Let&apos;s Build <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Together</span>
            </motion.h2>

            <motion.p variants={itemVariants} style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
              Whether you have a project in mind, need a developer for your team, or just want to say hi, my inbox is always open.
            </motion.p>

            <motion.form variants={itemVariants} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" }}>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 600 }}>Name</label>
                  <input required type="text" id="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124, 58, 237, 0.3)", color: "#fff", outline: "none", fontSize: "1rem", transition: "border-color 0.3s" }} placeholder="John Doe" />
                </div>
                <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 600 }}>Email</label>
                  <input required type="email" id="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124, 58, 237, 0.3)", color: "#fff", outline: "none", fontSize: "1rem", transition: "border-color 0.3s" }} placeholder="john@example.com" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label htmlFor="message" style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 600 }}>Message</label>
                <textarea required id="message" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows={4} style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124, 58, 237, 0.3)", color: "#fff", outline: "none", fontSize: "1rem", transition: "border-color 0.3s", resize: "vertical" }} placeholder="Hello! I'd like to discuss a project..." />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                style={{
                  padding: "1rem 2.5rem", borderRadius: "9999px",
                  background: isSubmitted ? "#10b981" : (isSubmitting ? "rgba(124, 58, 237, 0.5)" : "linear-gradient(135deg, #7c3aed, #06b6d4)"),
                  border: "none", color: "#fff", fontWeight: 700, fontSize: "1.1rem", cursor: (isSubmitting || isSubmitted) ? "not-allowed" : "pointer",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
                  transition: "all 0.3s ease", boxShadow: isSubmitted ? "none" : "0 10px 30px rgba(124, 58, 237, 0.3)",
                  marginTop: "1rem",
                }}
              >
                {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </motion.form>

            <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "4rem" }}>
              <a href="https://github.com/Anwesha0425" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#e2e8f0"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg> GitHub
              </a>
              <a href="https://linkedin.com/in/Anwesha" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#64748b", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#e2e8f0"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
