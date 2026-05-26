"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "TechBrein",
    location: "Kozhikode, Kerala",
    period: "Jun 2025 – Present",
    current: true,
    highlights: [
      "Sole architect of FindITQ — 10-microservice enterprise platform (8 Go/Gin APIs + FastAPI + Next.js)",
      "Database-Per-Service pattern with PostgreSQL, Clerk OAuth, Docker containerization",
      "Deployed to UAT & production; actively used by recruitment team with zero critical issues",
      "Mentored junior developer and delegated across concurrent engagements",
      "Pioneered Claude Code with open-source models for rapid delivery",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Midnay Tech Private Limited",
    location: "Kozhikode, Kerala",
    period: "Feb 2024 – May 2025",
    current: false,
    highlights: [
      "Built custom WooCommerce plugins: One Page Checkout, Smart Coupon",
      "Developed web applications with third-party API integrations (Mailer Cloud)",
      "Headless WordPress applications integrated with Next.js",
      "Improved UX, functionality, and business requirement delivery",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Alokin Software Pvt. Ltd.",
    location: "Thiruvananthapuram, Kerala",
    period: "Sep 2023 – Dec 2023",
    current: false,
    highlights: [
      "Intensive training in Python and JavaScript",
      "Hands-on experience with software development methodologies",
      "Collaborative team projects",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Luminar Technolab Solutions",
    location: "Ernakulam, Kerala",
    period: "Jan 2023 – Aug 2023",
    current: false,
    highlights: [
      "Built web apps end-to-end with Python and Django",
      "Backend development, database design, API optimization",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-fade") || [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div className="section-fade" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="tag-pill">Experience</span>
        </div>
        <h2 className="section-fade" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "64px" }}>
          Where I&apos;ve worked<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline vertical line */}
          <div style={{ position: "absolute", left: "18px", top: 0, bottom: 0, width: "1px", background: "var(--border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {experiences.map((exp, i) => (
              <div
                key={exp.company + exp.period}
                className="section-fade"
                style={{ display: "flex", gap: "32px", transitionDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, width: "37px", display: "flex", justifyContent: "center", paddingTop: "6px" }}>
                  <div style={{
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    background: exp.current ? "var(--accent)" : "var(--border)",
                    border: `2px solid ${exp.current ? "var(--accent)" : "var(--muted-foreground)"}`,
                    boxShadow: exp.current ? "0 0 12px rgba(168,255,87,0.5)" : "none",
                    flexShrink: 0,
                  }} />
                </div>

                {/* Card */}
                <div
                  className="hover-card"
                  style={{
                    flex: 1,
                    background: "var(--card)",
                    border: `1px solid ${exp.current ? "rgba(168,255,87,0.2)" : "var(--border)"}`,
                    borderRadius: "12px",
                    padding: "28px 32px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "4px" }}>{exp.role}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "15px", color: "var(--accent)", fontWeight: 600 }}>{exp.company}</span>
                        <span style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>· {exp.location}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {exp.current && (
                        <span style={{ padding: "2px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: "rgba(168,255,87,0.1)", color: "var(--accent)", border: "1px solid rgba(168,255,87,0.3)" }}>
                          Current
                        </span>
                      )}
                      <span style={{ fontSize: "13px", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{exp.period}</span>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.highlights.map((h) => (
                      <li key={h} style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ color: "var(--accent)", marginTop: "4px", flexShrink: 0 }}>—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="section-fade" style={{ marginTop: "80px", paddingTop: "64px", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "28px" }}>Education</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { degree: "Master of Computer Application (MCA)", institution: "Dr. John Mathai Calicut University Centre, Thrissur", year: "Jan 2022" },
              { degree: "Bachelor of Computer Application (BCA)", institution: "IHRD College of Applied Science", year: "Jan 2020" },
            ].map((edu) => (
              <div key={edu.degree} className="hover-card" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "10px", padding: "24px" }}>
                <p style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, marginBottom: "8px" }}>{edu.year}</p>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>{edu.degree}</h4>
                <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
