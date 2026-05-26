"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".section-fade") || [];
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "var(--muted)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    color: "var(--foreground)",
    fontSize: "15px",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* CTA Banner */}
        <div
          className="section-fade"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "64px",
            marginBottom: "64px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,255,87,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div className="tag-pill" style={{ display: "inline-flex", marginBottom: "24px" }}>Let&apos;s Talk</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: "24px" }}>
            Got a project in mind?
          </h2>
          <p style={{ fontSize: "18px", color: "var(--muted-foreground)", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            I&apos;m open to full-time roles, freelance work, and interesting collaborations.
          </p>
          <a href="mailto:sneha@snehacp.com" className="btn-primary" style={{ fontSize: "15px", padding: "14px 36px" }}>
            Send an Email ↗
          </a>
        </div>

        {/* Contact form + info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <div className="section-fade">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Contact Info
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { label: "Email", value: "sneha@snehacp.com", href: "mailto:sneha@snehacp.com", icon: "✉" },
                { label: "LinkedIn", value: "linkedin.com/in/sneha-mohanan-367b8b24b", href: "https://linkedin.com/in/sneha-mohanan-367b8b24b", icon: "in" },
                { label: "GitHub", value: "github.com/Snehacp123", href: "https://github.com/Snehacp123", icon: "⌘" },
                { label: "Website", value: "snehacp.com", href: "https://snehacp.com", icon: "◎" },
                { label: "Location", value: "Kozhikode, Kerala, India", href: null, icon: "◈" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "8px", background: "var(--muted)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", color: "var(--muted-foreground)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="link-underline" style={{ fontSize: "14px", color: "var(--foreground)", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "14px", color: "var(--foreground)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="section-fade">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "var(--muted-foreground)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Message</label>
                <textarea
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>

              {status === "success" && (
                <div style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(0,200,100,0.08)", border: "1px solid rgba(0,200,100,0.3)", color: "#00c864", fontSize: "14px", textAlign: "center" }}>
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{ padding: "12px 16px", borderRadius: "8px", background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.3)", color: "#ff5050", fontSize: "14px", textAlign: "center" }}>
                  Something went wrong. Please try email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          section#contact > div > div:first-of-type { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}
