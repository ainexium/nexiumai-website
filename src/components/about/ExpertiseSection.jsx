import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Database, Code, Cpu, MessageSquare } from "lucide-react";

const ExpertiseCard = ({ title, text, Icon, custom, inView }) => {
  const MotionDiv = motion.div;
  const MotionH3 = motion.h3;
  const MotionP = motion.p;
  return (
    <MotionDiv
      className=" bg-blue-50 p-6 rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <MotionDiv
        className="w-10 h-10 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, delay: custom * 0.1 + 0.3 }}
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        <Icon className="h-6 w-6 text-blue-500" />
      </MotionDiv>

      <MotionH3
        className="text-xl font-medium mb-2 second--color"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: custom * 0.1 + 0.4 }}
      >
        {title}
      </MotionH3>

      <MotionP
        className="text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: custom * 0.1 + 0.5 }}
      >
        {text}
      </MotionP>
    </MotionDiv>
  );
};

const Expertise = () => {
  const MotionDiv = motion.div;
  const MotionH2 = motion.h2;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <MotionDiv
      className="py-16 max-w-6xl mx-auto px-6 md:px-12 lg:px-24"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MotionH2
        className="vision--section--h2 text-4xl second--color md:text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nos Domaines d'Expertise
      </MotionH2>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ExpertiseCard
          title="Intelligence Artificielle"
          text="Développement de solutions intelligentes qui utilisent des algorithmes d'apprentissage automatique pour optimiser les processus et prendre des décisions éclairées basées sur les données."
          Icon={Lightbulb}
          custom={0}
          inView={isInView}
        />
        <ExpertiseCard
          title="Data Science & Analytics"
          text="Exploitation des données à grande échelle pour extraire des insights significatifs, réaliser des analyses prédictives et aider les entreprises à prendre des décisions stratégiques basées sur des données concrètes."
          Icon={Database}
          custom={1}
          inView={isInView}
        />
        <ExpertiseCard
          title="Développement Logiciel"
          text="Conception et développement de logiciels sur mesure pour répondre aux besoins spécifiques des entreprises, en intégrant des technologies modernes et des pratiques de développement agiles."
          Icon={Code}
          custom={2}
          inView={isInView}
        />
      </MotionDiv>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:w-2/3 mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ExpertiseCard
          title="Hyper Automatisation"
          text="Mise en œuvre de l'hyper-automatisation pour améliorer l'efficacité opérationnelle, en combinant IA, robotisation des processus et automatisation des workflows pour des résultats optimisés."
          Icon={Cpu}
          custom={3}
          inView={isInView}
        />
        <ExpertiseCard
          title="Automatisation Chatbot"
          text="Création de chatbots intelligents capables d'automatiser les interactions avec les clients, améliorant ainsi l'engagement et la satisfaction tout en réduisant les coûts opérationnels."
          Icon={MessageSquare}
          custom={4}
          inView={isInView}
        />
      </MotionDiv>
    </MotionDiv>
  );
};

export default Expertise;
