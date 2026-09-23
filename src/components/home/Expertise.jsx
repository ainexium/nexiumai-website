import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  { title: "Intelligence Artificielle", text: "Systèmes d'apprentissage automatique adaptés à vos données et vos processus — pas des solutions génériques.", icon: "/assets/ia.png" },
  { title: "Data Science & Analytics", text: "Extraction d'insights à partir de vos données brutes. Tableaux de bord, modèles prédictifs, pipelines de données.", icon: "/assets/cerveau.png" },
  { title: "Développement Logiciel", text: "Applications web, APIs, outils internes. Du code maintenable, testé et déployé — pas des maquettes.", icon: "/assets/dev.png" },
  { title: "Hyper Automatisation", text: "Élimination des tâches répétitives par la combinaison d'IA, de RPA et d'intégrations entre vos outils.", icon: "/assets/automation.png" },
  { title: "Chatbots & Assistants", text: "Agents conversationnels pour le support client, la qualification de leads ou les processus internes 24h/24.", icon: "/assets/chatbot.png" },
];

const COLS = 3;
const TOTAL_ROWS = Math.ceil(cards.length / COLS);

function Card({ title, text, icon, index, inView, noRight, noBottom }) {
  return (
    <motion.div
      className="expertise-card"
      style={{
        padding: "32px 28px",
        borderRight: noRight ? "none" : "1px solid var(--border)",
        borderBottom: noBottom ? "none" : "1px solid var(--border)",
        background: "transparent",
        transition: "background 0.2s",
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <img src={icon} alt={title} style={{ width: 18, height: 18, objectFit: "contain" }} />
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--fg)", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.65, margin: 0 }}>{text}</p>
    </motion.div>
  );
}

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="expertise" ref={ref} style={{ position: "relative", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1, background: "var(--bg)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>

        {/* Header row */}
        <motion.div
          className="sec-head"
          style={{ padding: "64px 48px 48px", borderBottom: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14, color: "var(--accent)" }}>
            Ce qu'on fait
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--fg)", maxWidth: 520, lineHeight: 1.15, letterSpacing: "-0.025em", margin: 0 }}>
            Une expertise technique, pas un catalogue de buzzwords.
          </h2>
        </motion.div>

        {/* Desktop — grille 3 colonnes unifiée */}
        <div
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
          className="hidden md:grid"
        >
          {cards.map((c, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const isLastCol = col === COLS - 1;
            const isLastInRow = i === cards.length - 1 && !isLastCol;
            const isLastRow = row === TOTAL_ROWS - 1;
            return (
              <Card
                key={c.title}
                {...c}
                index={i}
                inView={inView}
                noRight={isLastCol || isLastInRow}
                noBottom={isLastRow}
              />
            );
          })}
        </div>

        {/* Mobile — colonne simple */}
        <div className="md:hidden">
          {cards.map((c, i) => (
            <Card
              key={c.title}
              {...c}
              index={i}
              inView={inView}
              noRight={true}
              noBottom={i === cards.length - 1}
            />
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", height: 48 }} />
      </div>
    </section>
  );
}
