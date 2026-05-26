"use client";
import { useEffect, useState, useRef } from "react";

const roles = ["Full-Stack Developer", "Microservices Architect", "AI App Builder", "Go & Next.js Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "0 32px",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(168,255,87,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,255,87,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
      }} />

      {/* Accent blur */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(168,255,87,0.07) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", paddingTop: "120px", paddingBottom: "80px" }}>

        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(168,255,87,0.3)",
            background: "rgba(168,255,87,0.06)",
            marginBottom: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Available for new projects
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          <span style={{ display: "block", color: "var(--foreground)" }}>Sneha</span>
          <span style={{ display: "block", color: "var(--accent)" }}>Mohanan</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 600,
            color: "var(--muted-foreground)",
            marginBottom: "32px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <span style={{ color: "var(--foreground)" }}>{displayed}</span>
          <span className="cursor-blink" style={{ marginLeft: "2px", color: "var(--accent)", fontWeight: 300 }}>|</span>
        </div>

        {/* Bio */}
        <p
          style={{
            maxWidth: "560px",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
            marginBottom: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.3s",
          }}
        >
          2+ years building enterprise-grade AI-powered platforms. Sole architect of{" "}
          <a href="https://finditq.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
            FindITQ
          </a>
          {" "}— a 10-microservice ecosystem connecting talent, startups, and investors.
          AWS & Oracle Certified.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "80px",
            paddingTop: "48px",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.5s",
          }}
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10", label: "Microservices Built" },
            { value: "3x", label: "Cloud Certifications" },
            { value: "0", label: "Critical Issues Post-Launch" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "13px", color: "var(--muted-foreground)", letterSpacing: "0.04em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        opacity: 0.4,
      }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--muted-foreground), transparent)", animation: "scroll-line 1.5s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(168,255,87,0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(168,255,87,0); }
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 768px) {
          section#hero { padding: 0 20px; }
        }
      `}</style>
    </section>
  );
}
