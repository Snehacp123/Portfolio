"use client";
import { useEffect, useRef } from "react";

const techStack = [
  { name: "Golang", color: "#00ADD8" },
  { name: "Next.js 15", color: "#fff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#F7C948" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#FF9900" },
  { name: "FastAPI", color: "#009688" },
  { name: "Gin", color: "#00ADD8" },
  { name: "Django", color: "#44B78B" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Claude Code", color: "#a8ff57" },
];

const skills = [
  {
    category: "Languages & Frameworks",
    icon: "⟨/⟩",
    items: ["Golang · Gin", "Python · Django · FastAPI", "TypeScript · Next.js 15", "JavaScript", "PHP · WordPress"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁",
    items: ["AWS EC2, S3", "Oracle Cloud", "Docker", "Linux", "CI/CD Pipelines"],
  },
  {
    category: "Databases & APIs",
    icon: "◈",
    items: ["PostgreSQL", "MySQL · SQLite", "REST APIs", "WebSocket", "Clerk Auth / JWKS"],
  },
  {
    category: "AI & Automation",
    icon: "◎",
    items: ["OpenAI API", "Claude Code", "AI Agents", "n8n Automation", "OpenRouter LLM"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-fade") || [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Label */}
        <div className="section-fade" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="tag-pill">Skills</span>
        </div>
        <h2 className="section-fade" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "64px" }}>
          Tech I work with<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        {/* Skill cards grid */}
        <div
          className="section-fade"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="hover-card"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{skill.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
                {skill.category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {skill.items.map((item) => (
                  <li key={item} style={{ fontSize: "15px", color: "var(--foreground)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="section-fade">
          <p style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>Certifications</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              "AWS Developer – Associate (2025–2028)",
              "Oracle Cloud Developer Professional (2025–2027)",
              "Oracle Gen AI Professional (2025–2027)",
              "Python Django Full Stack (NCTT)",
            ].map((cert) => (
              <div
                key={cert}
                style={{
                  padding: "10px 18px",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "var(--foreground)",
                  background: "var(--card)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>✓</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling tech banner */}
      <div style={{ marginTop: "80px", overflow: "hidden", position: "relative", padding: "24px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        {/* Gradient masks */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--background), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--background), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div className="tech-scroll" style={{ display: "flex", gap: "40px", width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                background: "var(--card)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: tech.color, boxShadow: `0 0 8px ${tech.color}60` }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
