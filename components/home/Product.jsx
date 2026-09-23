"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SHOW_UPCOMING = false;

export default function Product() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLang();
  const p = t.product;

  return (
    <section id="produit" ref={ref} style={{ position: "relative", background: "var(--bg-section)" }}>
      <div className="grid-overlay" />
      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1, background: "var(--bg-section)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>

        <motion.div
          className="sec-head"
          style={{ padding: "64px 48px 48px", borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14, color: "var(--blue)" }}>
            {p.eyebrow}
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--fg)", lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0 }}>
            {p.title}
          </h2>
        </motion.div>

        <motion.div
          className="product-main-grid md:grid block"
          style={{ gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="product-left" style={{ padding: "48px", borderRight: "1px solid var(--border)" }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 99, marginBottom: 20, background: "var(--tag-bg)", color: "var(--tag-fg)", border: "1px solid var(--tag-border)" }}>
              {p.tag}
            </span>
            <h3 className="product-h3" style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>{p.name}</h3>
            <p className="product-desc" style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 28 }}>{p.description}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
              {p.features.map(({ label, desc }) => (
                <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue)", marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <p className="product-feature-label" style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)", margin: 0 }}>{label}</p>
                    <p className="product-feature-desc" style={{ fontSize: 12, color: "var(--fg-2)", margin: "2px 0 0" }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="https://console.nexiumai.io" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#fff", background: "var(--blue)", textDecoration: "none", transition: "background 0.15s, transform 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--blue-h)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--blue)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {p.ctaPrimary}
              </a>
              <a href="https://console.nexiumai.io/docs" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", padding: "9px 20px", borderRadius: 6, fontSize: 13, fontWeight: 500, color: "var(--fg-2)", border: "1px solid var(--border)", background: "transparent", textDecoration: "none", transition: "border-color 0.15s, color 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--fg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-2)"; }}
              >
                {p.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="hidden md:flex" style={{ flexDirection: "column", background: "#0d0d14" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 10, fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>terminal</span>
            </div>
            <div className="product-terminal" style={{ flex: 1, padding: "24px", fontFamily: "monospace", fontSize: 12, lineHeight: 1.9, overflow: "hidden" }}>
              {p.terminalLines.map((line, i) => (
                <motion.div key={i} style={{ color: line.c }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.25, delay: 0.4 + i * 0.07 }}
                >
                  {line.t || <span>&nbsp;</span>}
                </motion.div>
              ))}
              <motion.span style={{ display: "inline-block", width: 7, height: 14, marginLeft: 2, verticalAlign: "middle", background: "rgba(255,255,255,0.35)" }} animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="product-sdk"
          style={{ padding: "20px 48px", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75 }}
        >
          <span style={{ fontSize: 12, color: "var(--fg-3)" }}>{p.sdkLabel}</span>
          {[
            { label: "npm install @ainexium/storage", href: "https://www.npmjs.com/package/@ainexium/storage" },
            { label: "pip install nexium-storage", href: "https://pypi.org/project/nexium-storage/" },
          ].map((sdk) => (
            <a key={sdk.label} href={sdk.href} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", padding: "4px 12px", borderRadius: 4, fontFamily: "monospace", fontSize: 12, color: "var(--fg-2)", border: "1px solid var(--border)", background: "transparent", textDecoration: "none", transition: "border-color 0.15s, color 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-2)"; }}
            >
              {sdk.label}
            </a>
          ))}
        </motion.div>

        {SHOW_UPCOMING && (
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:grid block"
          >
            {p.upcoming.map((u, i) => (
              <div key={u.name} style={{ padding: "40px 48px", borderRight: i === 0 ? "1px solid var(--border)" : "none", opacity: 0.5 }}>
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 99, marginBottom: 20, background: "var(--tag-bg)", color: "var(--tag-fg)", border: "1px solid var(--tag-border)" }}>
                  {u.tag}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--fg)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>{u.name}</h3>
                <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7, marginBottom: 24 }}>{u.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {u.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--fg-3)", flexShrink: 0 }} />
                      <p style={{ fontSize: 13, color: "var(--fg-3)", margin: 0 }}>{f}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

        <div style={{ borderBottom: "1px solid var(--border)", height: 48 }} />
      </div>
    </section>
  );
}
