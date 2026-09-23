import React from "react";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp } from "lucide-react";

const NousChoisir = () => {
  const MotionDiv = motion.div;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Pourquoi Nous Choisir</h2>
          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Ce qui nous différencie et fait de nous le partenaire idéal pour vos
            besoins technologiques.
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avantage 1 */}
          <MotionDiv className="text-center" variants={fadeIn}>
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-6">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Approche Innovante</h3>
            <p className="text-blue-100">
              Nous restons à la pointe des dernières avancées technologiques
              pour vous offrir des solutions avant-gardistes et efficaces.
            </p>
          </MotionDiv>

          {/* Avantage 2 */}
          <MotionDiv className="text-center" variants={fadeIn}>
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Équipe Talentueuse</h3>
            <p className="text-blue-100">
              Notre équipe réunit des compétences techniques avancées et une
              passion pour l'innovation qui nous permettent de relever les défis
              les plus complexes.
            </p>
          </MotionDiv>

          {/* Avantage 3 */}
          <MotionDiv className="text-center" variants={fadeIn}>
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Solutions Personnalisées</h3>
            <p className="text-blue-100">
              Nous nous adaptons à vos besoins spécifiques pour créer des
              solutions sur mesure qui correspondent parfaitement à vos
              objectifs et votre vision.
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default NousChoisir;
