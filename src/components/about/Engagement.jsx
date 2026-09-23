import React from "react";
import { motion } from "framer-motion";

const Engagement = () => {
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
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold second--color dark:text-white mb-6">
            Notre Engagement
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Au-delà de la technologie, nous nous engageons à créer un impact
            positif
          </p>
        </MotionDiv>

        <MotionDiv
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Engagement 1 */}
          <MotionDiv
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Développement Local
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous nous engageons à contribuer au développement du secteur
              technologique en Côte d'Ivoire, en formant les talents locaux et
              en créant des opportunités d'emploi dans le domaine des
              technologies avancées.
            </p>
          </MotionDiv>

          {/* Engagement 2 */}
          <MotionDiv
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Innovation Responsable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous développons des solutions technologiques qui respectent les
              principes éthiques et qui sont conçues pour avoir un impact
              positif sur la société et l'environnement.
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Engagement;
