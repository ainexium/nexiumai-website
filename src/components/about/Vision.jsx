import React from 'react'
import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,

} from "lucide-react";

const Vision = () => {
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
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <MotionDiv
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-80"
            variants={fadeIn}
          >
            <div className="w-full h-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <span className="text-gray-600 dark:text-gray-400 block">
                  Une vision pour l'avenir
                </span>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv variants={fadeIn}>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
              Notre Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chez NEXIUM.AI, notre ambition est de devenir un leader mondial en
              transformant les industries grâce à des innovations qui façonnent
              l'avenir.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Nous envisageons un monde où la technologie ne se contente pas de
              résoudre les problèmes actuels, mais anticipe et façonne les
              opportunités de demain.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Notre vision est d'être à l'avant-garde de cette transformation,
              en créant des solutions qui permettent aux entreprises et aux
              individus de prospérer dans un environnement numérique en
              constante évolution.
            </p>
            <div className="mt-8 flex items-center">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-200">
                Construire aujourd'hui les solutions de demain
              </span>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

export default Vision