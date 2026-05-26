"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "24px 0",
        background: scrolled
          ? "rgba(5, 5, 7, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            SM<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline"
              style={{
                color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--muted-foreground)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" className="btn-primary" style={{ padding: "8px 20px", fontSize: "12px" }} target="_blank">
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: "var(--foreground)", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "var(--foreground)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 24, height: 2, background: "var(--foreground)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, top: "60px",
          background: "rgba(5,5,7,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "32px", zIndex: 99,
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--foreground)",
                fontSize: "28px",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
