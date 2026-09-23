import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const Equipe = () => {
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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold second--color  md:text-6xl dark:text-white mb-6">
            Notre Équipe
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Des experts passionnés qui travaillent ensemble pour faire avancer
            notre mission.
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Membre d'équipe 1 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            variants={fadeIn}
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-700">
              <div className="w-full h-64 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                <Users className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Prénom Nom
              </h3>
              <p className="text-blue-500 mb-3">PDG & Co-fondateur</p>
              <p className="text-gray-600 dark:text-gray-300">
                Courte biographie du membre de l'équipe, mentionnant son
                parcours et son expertise.
              </p>
            </div>
          </MotionDiv>

          {/* Membre d'équipe 2 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            variants={fadeIn}
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-700">
              <div className="w-full h-64 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                <Users className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Prénom Nom
              </h3>
              <p className="text-blue-500 mb-3">CTO & Co-fondateur</p>
              <p className="text-gray-600 dark:text-gray-300">
                Courte biographie du membre de l'équipe, mentionnant son
                parcours et son expertise.
              </p>
            </div>
          </MotionDiv>

          {/* Membre d'équipe 3 */}
          <MotionDiv
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            variants={fadeIn}
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-700">
              <div className="w-full h-64 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                <Users className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Prénom Nom
              </h3>
              <p className="text-blue-500 mb-3">Directeur Marketing</p>
              <p className="text-gray-600 dark:text-gray-300">
                Courte biographie du membre de l'équipe, mentionnant son
                parcours et son expertise.
              </p>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Equipe;
