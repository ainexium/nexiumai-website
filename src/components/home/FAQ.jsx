import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const items = [
  { q: "Qu'est-ce que NEXIUM.AI ?", a: "NEXIUM.AI est une startup technologique qui conçoit des produits SaaS et propose des services de transformation numérique, développement logiciel, IA, automatisation et data science. Notre premier produit en production est NEXIUM Storage." },
  { q: "Qu'est-ce que NEXIUM Storage ?", a: "NEXIUM Storage est une plateforme cloud de stockage objet S3-compatible. Elle permet aux développeurs et entreprises de stocker, gérer et servir leurs fichiers via une API simple, des clés d'accès sécurisées et un dashboard intuitif." },
  { q: "Proposez-vous des prestations sur mesure ?", a: "Oui. En parallèle de nos produits, nous accompagnons des entreprises sur des projets de développement logiciel, d'intégration IA et d'automatisation. Contactez-nous pour discuter de votre besoin." },
  { q: "Comment démarrer avec NEXIUM Storage ?", a: "Créez un compte gratuit sur console.nexiumai.io, créez un projet, un bucket, générez une clé API — et vous pouvez uploader votre premier fichier en moins de 5 minutes." },
  { q: "Où sont hébergées les données ?", a: "Les fichiers sont stockés sur Cloudflare R2, une infrastructure de stockage objet distribuée et hautement disponible, avec des datacenters en Europe et dans le monde." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" ref={ref} style={{ position: "relative", background: "var(--bg)" }}>
      <div className="grid-overlay" />
      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1, background: "var(--bg)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
        {/* Header row */}
        <motion.div
          className="sec-head"
          style={{ padding: "64px 48px 48px", borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14, color: "var(--accent)" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--fg)", lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0 }}>
            Questions fréquentes
          </h2>
        </motion.div>

        {/* Two-column layout — left label, right accordion */}
        <div style={{ gridTemplateColumns: "280px 1fr", borderBottom: "1px solid var(--border)" }} className="md:grid block">
          <div className="faq-sidebar" style={{ padding: "40px 48px", borderRight: "1px solid var(--border)" }}>
            <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.6 }}>
              Une question ?{" "}
              <a href="mailto:ai.nexium@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>Écrivez-nous</a>
            </p>
          </div>

          <div>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  style={{ borderBottom: i < items.length - 1 ? "1px solid var(--border)" : "none" }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.06 + i * 0.05 }}
                >
                  <button
                    className="faq-btn"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 48px", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--fg)", paddingRight: 24, lineHeight: 1.4 }}>{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.18 }} style={{ color: isOpen ? "var(--accent)" : "var(--fg-3)", flexShrink: 0 }}>
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                        <p className="faq-ans" style={{ padding: "0 48px 22px", fontSize: 13, color: "var(--fg-2)", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
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
