"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLang();
  const h = t.hero;
  const words = h.titleWords;

  const [displayText, setDisplayText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setWordIdx(0);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const word = words[wordIdx];
    if (!word) return;

    let delay;
    if (!isDeleting) {
      if (displayText.length < word.length) {
        delay = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 90);
      } else {
        delay = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        delay = setTimeout(() => setDisplayText(d => d.slice(0, -1)), 48);
      } else {
        delay = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }, 250);
      }
    }
    return () => clearTimeout(delay);
  }, [displayText, isDeleting, wordIdx, words]);

  useEffect(() => {
    const id = setInterval(() => setCursorOn(c => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="grid-overlay" style={{ backgroundPositionY: "4px" }} />
      <div style={{ height: 60, flexShrink: 0 }} />

      <div
        className="hero-outer"
        style={{
          flex: 1,
          maxWidth: "100%",
          width: "100%",
          margin: "0 auto",
          padding: "0 210px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "var(--bg)",
          backgroundClip: "content-box",
        }}
      >
        <div style={{ border: "1px solid var(--border)", background: "var(--bg)" }}>
          <div className="hero-main-grid" style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
            <motion.div
              className="hero-left"
              style={{ borderRight: "1px solid var(--border)", padding: "28px 48px 90px", display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 28, color: "var(--accent)" }}>
                {h.eyebrow}
              </p>

              <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--fg)", maxWidth: 580, marginBottom: 20 }}>
                {h.titlePrefix}{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  <span style={{ color: "var(--accent)" }}>
                    {displayText}
                  </span>
                  <span style={{
                    display: "inline-block",
                    width: "22px",
                    height: "1.15em",
                    background: "linear-gradient(180deg, rgba(150, 150, 150, 0.28) 0%, rgba(150, 150, 150, 0.02) 100%)",
                    marginLeft: "4px",
                    verticalAlign: "middle",
                    borderRadius: "2px",
                    opacity: cursorOn ? 1 : 0,
                    transition: "opacity 0.08s",
                  }} />
                </span>
                {h.titleSuffix}
              </h1>

              <p style={{ fontSize: 15, maxWidth: 440, lineHeight: 1.65, color: "var(--fg-2)" }}>
                {h.description}
              </p>
            </motion.div>

            <motion.div
              className="hero-right"
              style={{ padding: "52px 32px 24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 10 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#produit" className="btn-slide-fill"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}
              >
                {h.ctaPrimary} <span>›</span>
              </a>
              <a href="mailto:ai.nexium@gmail.com" className="btn-slide-fill-outline"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: "none" }}
              >
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  {h.ctaSecondary} <span>›</span>
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-stats"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            {h.stats.map((s, i) => (
              <div key={s.label} className={`hero-stat-${i}`}
                style={{ padding: "24px 24px", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}
              >
                <p style={{ fontSize: 18, fontWeight: 600, color: "var(--fg)", margin: 0, letterSpacing: "-0.02em" }}>{s.value}</p>
                <p style={{ fontSize: 11, color: "var(--fg-3)", margin: "3px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
