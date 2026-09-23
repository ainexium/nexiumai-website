"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const social = [
  { name: "WhatsApp", icon: "/assets/whatsapp.png", href: "https://wa.me/message/DWFX6PYDHERII1" },
  { name: "LinkedIn", icon: "/assets/linkedin.png", href: "https://www.linkedin.com/in/nexiumai/" },
  { name: "Facebook", icon: "/assets/facebook.png", href: "https://www.facebook.com/profile.php?id=61577383960951" },
  { name: "Instagram", icon: "/assets/instagram.png", href: "https://www.instagram.com/nexium_ai/" },
];

const B = "rgba(255,255,255,0.09)";
const M = "rgba(255,255,255,0.35)";
const F = "rgba(255,255,255,0.18)";

function DecoGrid({ cols = 2, rows = 3 }) {
  const total = cols * rows;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`, height: "100%", background: "#141414" }}>
      {Array.from({ length: total }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        return (
          <div key={i} style={{
            borderLeft: col > 0 ? `1px solid ${B}` : "none",
            borderBottom: row < rows - 1 ? `1px solid ${B}` : "none",
          }} />
        );
      })}
    </div>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const { lang, setLang, t } = useLang();
  const f = t.footer;
  const n = t.nav;

  const navLinks = [
    { label: n.expertise, href: "#expertise" },
    { label: n.products, href: "#produit" },
    { label: n.faq, href: "#faq" },
  ];

  const products = [
    { label: "NEXIUM Storage", href: "https://console.nexiumai.io" },
    { label: "Documentation", href: "https://console.nexiumai.io/docs" },
    { label: "SDK JavaScript", href: "https://www.npmjs.com/package/@ainexium/storage" },
    { label: "SDK Python", href: "https://pypi.org/project/nexium-storage/" },
  ];

  return (
    <footer ref={ref} style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="grid-overlay" />

      <div className="sect-inner" style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1, background: "#141414", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>

        <motion.div
          className="footer-cta-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 260px", borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-cta-text" style={{ padding: "80px 48px 72px", background: "#141414", borderRight: `1px solid ${B}` }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18, color: "rgba(155,61,255,0.65)" }}>
              {f.cta.eyebrow}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 500, color: "#fff", marginBottom: 14, letterSpacing: "-0.03em" }}>
              {f.cta.title}
            </h2>
            <p style={{ fontSize: 14, color: M, maxWidth: 380, marginBottom: 36, lineHeight: 1.6 }}>
              {f.cta.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="mailto:ai.nexium@gmail.com"
                className="btn-slide-accent"
                style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", borderRadius: 6, fontSize: 14, fontWeight: 600, color: "#141414", background: "#fff", textDecoration: "none" }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>{f.cta.emailBtn}</span>
              </a>
              <a href="https://wa.me/message/DWFX6PYDHERII1" target="_blank" rel="noopener noreferrer"
                className="btn-slide-white"
                style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", borderRadius: 6, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>{f.cta.whatsappBtn}</span>
              </a>
            </div>
          </div>

          <div className="footer-deco"><DecoGrid cols={2} rows={3} /></div>
        </motion.div>

        <motion.div
          className="footer-links-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: `1px solid ${B}`, background: "#141414" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          <div className="footer-brand" style={{ padding: "40px 48px", borderRight: `1px solid ${B}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
              <img src="/assets/logo-icon.png" alt="NEXIUM.AI" width={24} height={24} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>NEXIUM.AI</span>
            </div>
            <p style={{ fontSize: 12, marginBottom: 20, color: F, lineHeight: 1.55 }}>{f.tagline}</p>
            <div style={{ display: "flex", gap: 7 }}>
              {social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: `1px solid ${B}`, transition: "border-color 0.15s, background 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = B; }}
                >
                  <img src={s.icon} alt={s.name} width={12} height={12} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: f.navTitle, links: navLinks },
            { title: f.productsTitle, links: products },
            { title: f.contactTitle, links: [{ label: "ai.nexium@gmail.com", href: "mailto:ai.nexium@gmail.com" }, { label: "WhatsApp", href: "https://wa.me/message/DWFX6PYDHERII1", external: true }] },
          ].map((col, ci) => (
            <div key={col.title} className="footer-link-col" style={{ padding: "40px 32px", borderRight: ci < 2 ? `1px solid ${B}` : "none" }}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18, color: F }}>
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{ fontSize: 12, color: M, textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = M)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Barre basse — copyright + switcher de langue */}
      <div className="footer-bottom sect-inner" style={{ maxWidth: 1152, margin: "0 auto", padding: "20px 48px", position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 11, color: "var(--fg-3)", margin: 0 }}>{f.copyright}</p>

        {/* Switcher FR | EN */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {["fr", "en"].map((l, i) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {i > 0 && <span style={{ color: "var(--fg-3)", fontSize: 11, userSelect: "none" }}>|</span>}
              <button
                onClick={() => setLang(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: lang === l ? 700 : 400,
                  color: lang === l ? "var(--fg)" : "var(--fg-3)",
                  padding: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  transition: "color 0.15s",
                }}
              >
                {l}
              </button>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
