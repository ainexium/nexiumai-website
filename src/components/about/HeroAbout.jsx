import React from 'react'
import { motion } from "framer-motion";

function HeroAbout() {
  const MotionH1 = motion.h1;
  const MotionP = motion.p;
  return (
    <section className="relative pb-14 overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <MotionH1
            className="text-4xl font-bold second--color  md:text-6xl dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            À Propos de NEXIUM.AI
          </MotionH1>
          <MotionP
            className="text-black max-w-3xl mx-auto text-xl  dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Nous transformons les industries grâce à l'IA, les données et
            l'hyper-automatisation, en créant des solutions innovantes pour un
            monde numérique en constante évolution.
          </MotionP>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout
