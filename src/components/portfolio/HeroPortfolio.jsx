import React from 'react'
import { motion } from "framer-motion"

const HeroPortfolio = () => {
  const MotionH1 = motion.h1;
  const MotionP = motion.p;
  return (
    <section className="relative pb-12 mb-10 overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <MotionH1
            className="text-4xl md:text-6xl font-bold second--color dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Notre Portfolio
          </MotionH1>
          <MotionP
            className="max-w-3xl mx-auto text-xl text-black dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Découvrez nos réalisations et projets qui démontrent notre expertise
            dans divers domaines technologiques. Chaque projet reflète notre
            engagement à fournir des solutions innovantes et efficaces.
          </MotionP>
        </div>
      </div>
    </section>
  );
}

export default HeroPortfolio