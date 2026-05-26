"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    featured: true,
    name: "FindITQ",
    tagline: "Enterprise Talent & Investment Ecosystem",
    url: "https://finditq.com",
    description:
      "Sole architect and developer of a multi-sided marketplace platform connecting job seekers, employers, vendors, startups, and investors. Built from the ground up with a microservices-first mindset.",
    highlights: [
      "10 independent microservices (8 Go/Gin + 1 FastAPI + 1 Next.js frontend)",
      "AI-powered chatbot with tool calling via OpenRouter LLM",
      "PostgreSQL Database-Per-Service pattern (8 isolated DBs)",
      "AWS S3 for media, WebSocket for real-time notifications",
      "Live in production with zero critical post-launch issues",
    ],
    tags: ["Golang", "Next.js 15", "FastAPI", "PostgreSQL", "Docker", "AWS", "AI Agents"],
    status: "Live",
  },
  {
    featured: false,
    name: "HRMS / CRM Platform",
    tagline: "Enterprise CRM/PMS Microservice",
    url: "https://pms.techbrein.com",
    description:
      "Contributed to an enterprise CRM/PMS platform by building the HRMS service with employee check-in/check-out, search, and role-based access control across the microservice architecture.",
    highlights: [
      "HRMS service with check-in/check-out tracking",
      "Advanced search service integration",
      "Role-based access control across microservices",
    ],
    tags: ["Golang", "Microservices", "RBAC", "PostgreSQL"],
    status: "Live",
  },
  {
    featured: false,
    name: "Headless WordPress Migration",
    tagline: "Performance Optimization via Headless CMS",
    url: "#",
    description:
      "Migrated a production WordPress site to a headless architecture using Next.js, developed custom WordPress plugins for API exposure, significantly improving performance and page load speeds.",
    highlights: [
      "Custom WordPress REST API plugins",
      "Next.js frontend with SSG/ISR",
      "Significant performance improvement post-migration",
    ],
    tags: ["Next.js", "WordPress", "PHP", "Performance"],
    status: "Delivered",
  },
  {
    featured: false,
    name: "Greater Wyndham Realtors",
    tagline: "Real Estate Platform",
    url: "https://greaterwyndhamrealtors.com.au/",
    description:
      "Built and integrated VaultRE API for real estate listings and property data, handling full backend and frontend implementation.",
    highlights: [
      "VaultRE API integration",
      "Full-stack PHP/WordPress implementation",
      "Property listing management system",
    ],
    tags: ["PHP", "WordPress", "VaultRE API"],
    status: "Delivered",
  },
];

export default function Projects() {
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

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div className="section-fade" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="tag-pill">Projects</span>
        </div>
        <h2 className="section-fade" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "64px" }}>
          Things I&apos;ve built<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        {/* Featured project — full width */}
        {featured && (
          <div
            className="section-fade hover-card"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "48px",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(168,255,87,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span className="tag-pill" style={{ background: "rgba(168,255,87,0.15)", borderColor: "rgba(168,255,87,0.4)" }}>★ Flagship</span>
                  <span style={{ padding: "2px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: "rgba(0,200,100,0.1)", color: "#00c864", border: "1px solid rgba(0,200,100,0.3)" }}>
                    ● {featured.status}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "4px" }}>{featured.name}</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "15px" }}>{featured.tagline}</p>
              </div>
              <a
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ flexShrink: 0 }}
              >
                Visit Site ↗
              </a>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-foreground)", marginBottom: "32px", maxWidth: "680px" }}>
              {featured.description}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "32px" }}>
              {featured.highlights.map((h) => (
                <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--foreground)" }}>
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>→</span>
                  {h}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {featured.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {rest.map((project, i) => (
            <div
              key={project.name}
              className="section-fade hover-card"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px",
                transitionDelay: `${i * 0.08}s`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ padding: "2px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, background: "rgba(0,200,100,0.1)", color: "#00c864", border: "1px solid rgba(0,200,100,0.3)" }}>
                  ● {project.status}
                </span>
                {project.url !== "#" && (
                  <a href={project.url} target="_blank" rel="noreferrer" style={{ color: "var(--muted-foreground)", fontSize: "18px", textDecoration: "none", lineHeight: 1 }}>↗</a>
                )}
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "6px" }}>{project.name}</h3>
              <p style={{ fontSize: "13px", color: "var(--accent)", marginBottom: "16px", fontWeight: 600 }}>{project.tagline}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-foreground)", marginBottom: "24px", flex: 1 }}>{project.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill" style={{ fontSize: "11px" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
