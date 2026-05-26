"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">

          {/* Left: Text */}
          <div>
            <div className="section-fade" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <span className="tag-pill">About</span>
            </div>
            <h2 className="section-fade" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "32px" }}>
              I build systems<br />that <span style={{ color: "var(--accent)" }}>scale</span>.
            </h2>
            <div className="section-fade" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted-foreground)" }}>
                I&apos;m a results-driven Full-Stack Developer based in Kozhikode, Kerala, with 2+ years of hands-on experience
                designing and delivering enterprise-grade, AI-powered microservice applications.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted-foreground)" }}>
                As the sole architect of <a href="https://finditq.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>FindITQ</a>,
                I designed and shipped 10 independent microservices connecting job seekers, employers, vendors, startups,
                and investors — from system design to production deployment.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--muted-foreground)" }}>
                I&apos;m a pioneer in using <strong style={{ color: "var(--foreground)" }}>Claude Code</strong> for AI-assisted rapid development,
                and hold AWS Developer Associate and dual Oracle Cloud certifications.
              </p>
            </div>

            <div className="section-fade" style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
              <a href="https://linkedin.com/in/sneha-mohanan-367b8b24b" target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <a href="https://github.com/Snehacp123" target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub ↗
              </a>
              <a href="https://snehacp.com" target="_blank" rel="noreferrer" className="btn-secondary">
                Website ↗
              </a>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="section-fade" style={{ position: "relative" }}>
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Code block aesthetic */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "24px" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              </div>

              <div style={{ fontFamily: "monospace", fontSize: "14px", lineHeight: 2, color: "var(--muted-foreground)" }}>
                <div><span style={{ color: "#7c6af7" }}>const</span> <span style={{ color: "var(--accent)" }}>developer</span> <span style={{ color: "var(--foreground)" }}>= {"{"}</span></div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>name</span><span style={{ color: "var(--foreground)" }}>: </span>
                  <span style={{ color: "#98c379" }}>&quot;Sneha Mohanan&quot;</span><span style={{ color: "var(--foreground)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>role</span><span style={{ color: "var(--foreground)" }}>: </span>
                  <span style={{ color: "#98c379" }}>&quot;Full-Stack Developer&quot;</span><span style={{ color: "var(--foreground)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>stack</span><span style={{ color: "var(--foreground)" }}>: [</span>
                  <span style={{ color: "#98c379" }}>&quot;Go&quot;</span><span style={{ color: "var(--foreground)" }}>, </span>
                  <span style={{ color: "#98c379" }}>&quot;Next.js&quot;</span><span style={{ color: "var(--foreground)" }}>, </span>
                  <span style={{ color: "#98c379" }}>&quot;Python&quot;</span>
                  <span style={{ color: "var(--foreground)" }}>],</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>location</span><span style={{ color: "var(--foreground)" }}>: </span>
                  <span style={{ color: "#98c379" }}>&quot;Kozhikode, Kerala&quot;</span><span style={{ color: "var(--foreground)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>certs</span><span style={{ color: "var(--foreground)" }}>: [</span>
                  <span style={{ color: "#98c379" }}>&quot;AWS&quot;</span><span style={{ color: "var(--foreground)" }}>, </span>
                  <span style={{ color: "#98c379" }}>&quot;Oracle ×2&quot;</span>
                  <span style={{ color: "var(--foreground)" }}>],</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#e06c75" }}>available</span><span style={{ color: "var(--foreground)" }}>: </span>
                  <span style={{ color: "var(--accent)" }}>true</span><span style={{ color: "var(--foreground)" }}>,</span>
                </div>
                <div><span style={{ color: "var(--foreground)" }}>{"}"}</span></div>
              </div>

              {/* Glow */}
              <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(168,255,87,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute",
              bottom: "-16px",
              right: "24px",
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ fontSize: "20px" }}>🚀</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-display)" }}>10 Microservices</div>
                <div style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>Shipped solo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
