import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const Histoire = () => {
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
          <MotionDiv variants={fadeIn}>
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-6">
              Notre Histoire
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NEXIUM.AI est née d'une vision simple mais puissante : repousser
              les limites du possible grâce aux technologies émergentes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Notre voyage a commencé lorsque nos fondateurs ont identifié un
              besoin critique d'innovation technologique en Côte d'Ivoire. En
              observant comment l'IA et l'automatisation transformaient les
              industries à l'échelle mondiale, nous avons vu l'opportunité
              d'apporter ces technologies dans notre région.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Aujourd'hui, nous sommes une équipe passionnée de technologues,
              d'ingénieurs et de visionnaires, déterminés à créer un impact
              significatif dans le paysage numérique africain et au-delà.
            </p>
            <div className="mt-8 flex items-center">
              <Lightbulb className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-200">
                Une startup innovante en plein lancement
              </span>
            </div>
          </MotionDiv>
          <MotionDiv
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-80"
            variants={fadeIn}
          >
            <div className="w-full h-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
              <img src="images/image1.jpg" alt="Image Groupe" />
              {/* <div className="text-center">
                <Target className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <span className="text-gray-600 dark:text-gray-400 block">
                  Transformer les visions en réalité
                </span>
              </div> */}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Histoire;
