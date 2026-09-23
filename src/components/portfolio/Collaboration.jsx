import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonContact from "../ButtonContact";
import { useContactModal } from "../ContactModalContext";

const Collaboration = () => {
  const { openModal } = useContactModal();

  const MotionDiv = motion.div;
  const MotionH2 = motion.h2;
  const MotionP = motion.p;

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <MotionDiv
      ref={sectionRef}
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <MotionH2 className="text-4xl font-bold mb-4 second--color">
        Envie d'une Collaboration ?
      </MotionH2>
      <MotionP className="text-xl text-gray-600 mb-6">
        Connectons-nous et imaginons ensemble les solutions de demain.
      </MotionP>
      <ButtonContact title="Nous contacter" onClick={openModal} />
      {/* <MotionDiv
        className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-lg"
        whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.95 }}
      >
        Contactez-nous
      </MotionDiv> */}
    </MotionDiv>
  );
};

export default Collaboration;
