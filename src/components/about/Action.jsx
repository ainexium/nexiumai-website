import React from "react";
import { motion } from "framer-motion";
import ButtonContact from "../ButtonContact";
import { useContactModal } from "../ContactModalContext";

const Action = () => {
  const { openModal } = useContactModal();
  const MotionDiv = motion.div;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          className="bg-blue-500 rounded-2xl text-center p-12 md:p-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
            Prêt à Collaborer Avec Nous?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Découvrez comment nos solutions peuvent transformer votre entreprise
            et vous aider à atteindre vos objectifs dans un monde numérique en
            constante évolution.
          </p>
          <ButtonContact title="Nous contacter" onClick={openModal} />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Action;
