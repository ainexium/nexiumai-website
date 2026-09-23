"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq" ref={ref} style={{ position: "relative", background: "var(--bg)" }}>
      <div className="grid-overlay" />
      <div className="sect-inner" style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1, background: "var(--bg)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>

        <motion.div
          className="sec-head"
          style={{ padding: "64px 48px 48px", borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14, color: "var(--accent)" }}>{f.eyebrow}</p>
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", fontWeight: 500, color: "var(--fg)", lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0 }}>
            {f.title}
          </h2>
        </motion.div>

        <div style={{ gridTemplateColumns: "280px 1fr", borderBottom: "1px solid var(--border)" }} className="md:grid block">
          <motion.div className="faq-sidebar" style={{ padding: "40px 48px", borderRight: "1px solid var(--border)" }}
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.6 }}>
              {f.contact}{" "}
              <a href="mailto:ai.nexium@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>{f.contactLink}</a>
            </p>
          </motion.div>

          <div>
            {f.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div key={i}
                  style={{ borderBottom: i < f.items.length - 1 ? "1px solid var(--border)" : "none" }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    className="faq-btn"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 48px", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--fg)", paddingRight: 24, lineHeight: 1.4 }}>{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.18 }} style={{ color: isOpen ? "var(--accent)" : "var(--fg-3)", flexShrink: 0 }}>
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                        <p className="faq-ans" style={{ padding: "0 48px 22px", fontSize: 14, color: "var(--fg-2)", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div style={{ height: 48 }} />
      </div>
    </section>
  );
}
