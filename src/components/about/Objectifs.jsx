import React from "react";
import { motion } from "framer-motion";
const Objectifs = () => {
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
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold second--color dark:text-white mb-6">
            Nos Objectifs
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Les jalons que nous nous sommes fixés pour les années à venir
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Objectif 1 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Court Terme
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Établir notre présence dans l'écosystème technologique ivoirien et
              développer nos premières solutions clients personnalisées.
            </p>
          </MotionDiv>

          {/* Objectif 2 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Moyen Terme
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Étendre notre présence régionale et développer des produits
              propriétaires innovants dans les domaines de l'IA et de
              l'automatisation.
            </p>
          </MotionDiv>

          {/* Objectif 3 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Long Terme
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Devenir un acteur global reconnu dans le domaine des technologies
              avancées, avec un impact significatif sur la transformation
              numérique en Afrique.
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Objectifs;
