export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px" }}>
            SM<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
            © {year} Sneha Mohanan. All rights reserved.
          </span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/sneha-mohanan-367b8b24b" },
            { label: "GitHub", href: "https://github.com/Snehacp123" },
            { label: "finditq.com", href: "https://finditq.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
              style={{ fontSize: "13px", color: "var(--muted-foreground)", textDecoration: "none", transition: "color 0.2s" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
