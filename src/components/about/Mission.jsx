import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Target,
} from "lucide-react";

function Mission() {
  const MotionDiv = motion.div;
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
          <h2 className="text-4xl font-bold second--color  md:text-6xl dark:text-white mb-6">
            Notre Mission et Nos Valeurs
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Nous sommes guidés par une mission claire et des valeurs fortes qui
            définissent qui nous sommes.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionDiv
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Notre Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Notre mission est de devenir un leader mondial en transformant les
              industries grâce à des innovations qui façonnent l'avenir. Nous
              construisons des solutions intelligentes qui permettent aux
              entreprises et aux individus de prospérer dans un monde numérique
              complexe et en constante évolution.
            </p>
          </MotionDiv>

          <MotionDiv
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Award className="h-10 w-10 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nos Valeurs
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Innovation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous repoussons constamment les limites du possible et
                    explorons de nouvelles solutions technologiques.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Excellence
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous nous engageons à fournir un travail de la plus haute
                    qualité et à nous surpasser continuellement.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Impact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous nous concentrons sur la création de solutions qui
                    apportent une valeur réelle et mesurable.
                  </p>
                </div>
              </li>
            </ul>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

export default Mission;
