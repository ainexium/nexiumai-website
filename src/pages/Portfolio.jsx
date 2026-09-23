import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion, useInView } from "framer-motion";
import { Code, Database, ChartBar, Globe, Lock, Cpu } from "lucide-react";
import HeroPortfolio from "../components/portfolio/HeroPortfolio";
import Collaboration from "../components/portfolio/Collaboration";

// Configuration des icônes par catégorie
const categoryIcons = {
  "Intelligence Artificielle": Cpu,
  "Data Science & Analytics": Database,
  "Développement Logiciel": Code,
  "Hyper Automatisation": ChartBar,
  Tout: Globe,
};

const PortfolioCard = ({ title, description, category, image, tags }) => {
  const [isHovered, setIsHovered] = useState(false);
  const MotionDiv = motion.div;
  const MotionImg = motion.img;
  const MotionH3 = motion.h3;
  const MotionP = motion.p;
  const MotionSpan = motion.span;

  // Récupérer l'icône correspondant à la catégorie
  const CategoryIcon = categoryIcons[category] || Globe;

  return (
    <MotionDiv
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <MotionDiv className="relative overflow-hidden h-56">
        <MotionImg
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <MotionDiv
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.6 : 0.3 }}
        />
        <MotionDiv className="absolute top-4 right-4 flex items-center bg-blue-600 text-white text-xs uppercase font-bold rounded-full py-1 px-3">
          <CategoryIcon className="w-3 h-3 mr-1" />
          <MotionSpan>{category}</MotionSpan>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv className="p-6">
        <MotionH3 className="text-xl font-bold mb-2 text-gray-800">
          {title}
        </MotionH3>
        <MotionP className="text-gray-600 text-sm mb-4">{description}</MotionP>

        <MotionDiv className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <MotionSpan
              key={index}
              className="bg-blue-50 text-blue-700 text-xs py-1 px-2 rounded"
            >
              {tag}
            </MotionSpan>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

const FilterButton = ({ category, activeCategory, setActiveCategory }) => {
  const MotionButton = motion.button;
  const isActive = activeCategory === category;
  const IconComponent = categoryIcons[category] || Globe;

  return (
    <MotionButton
      className={`cursor-pointer py-2 px-4 rounded-full text-sm font-medium flex items-center ${isActive
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      onClick={() => setActiveCategory(category)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconComponent className="w-4 h-4 mr-2" />
      {category}
    </MotionButton>
  );
};

const Portfolio = () => {
  const MotionDiv = motion.div;

  const [activeCategory, setActiveCategory] = useState("Tout");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    // amount: 0.2,
    amount: window.innerWidth <= 375 ? 0.05 : 0.2,
  });

  const portfolioItems = [
    {
      id: 1,
      title: "Prédiction de performances financières",
      description:
        "Un système d'IA pour prédire les performances financières basé sur des données historiques et des indicateurs du marché en temps réel.",
      category: "Intelligence Artificielle",
      image: "images/financial.svg",
      tags: ["Machine Learning", "Finance", "Prédictif"],
    },
    {
      id: 2,
      title: "Plateforme d'analyse BigData",
      description:
        "Plateforme d'analyse de données massives pour une entreprise de télécommunications permettant d'optimiser les services clients.",
      category: "Data Science & Analytics",
      image: "images/bigdata.svg",
      tags: ["Big Data", "Hadoop", "Analyse prédictive"],
    },
    {
      id: 3,
      title: "Système de gestion automatisé",
      description:
        "Application complète de gestion des processus d'entreprise avec automatisation des tâches récurrentes.",
      category: "Développement Logiciel",
      image: "images/software.svg",
      tags: ["React", "Node.js", "Automatisation"],
    },
    {
      id: 4,
      title: "Dashboard analytique avancé",
      description:
        "Tableau de bord interactif pour la visualisation des données commerciales et l'analyse des tendances du marché.",
      category: "Data Science & Analytics",
      image: "images/dashboard.svg",
      tags: ["Visualisation", "Tableau", "Analytics"],
    },
    {
      id: 5,
      title: "Système de cybersécurité IA",
      description:
        "Système de détection des intrusions basé sur l'intelligence artificielle pour une protection proactive contre les menaces.",
      category: "Intelligence Artificielle",
      image: "images/security.svg",
      tags: ["Cybersécurité", "IA", "Protection"],
    },
    {
      id: 6,
      title: "Automatisation des processus RH",
      description:
        "Solution complète d'automatisation des processus de ressources humaines, du recrutement à l'intégration.",
      category: "Hyper Automatisation",
      image: "images/teamwork.svg",
      tags: ["RPA", "Workflows", "Ressources Humaines"],
    },
  ];

  const categories = [
    "Tout",
    "Intelligence Artificielle",
    "Data Science & Analytics",
    "Développement Logiciel",
    "Hyper Automatisation",
  ];

  const filteredItems =
    activeCategory === "Tout"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <section className="pb-16 bg-gray-50 " ref={sectionRef}>
        <HeroPortfolio />
        <MotionDiv
          className="max-w-6xl mx-auto px-6 md:px-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Filter Buttons */}
          <MotionDiv
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <FilterButton
                key={index}
                category={category}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </MotionDiv>

          {/* Portfolio Grid */}
          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <MotionDiv
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <PortfolioCard {...item} />
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* CTA Section */}
          <Collaboration />
        </MotionDiv>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
