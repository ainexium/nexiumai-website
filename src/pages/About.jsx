import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mission from "../components/about/Mission";
import HeroAbout from "../components/about/HeroAbout";
import Histoire from "../components/about/Histoire";
import Equipe from "../components/about/Equipe";
import Expertise from "../components/about/ExpertiseSection";
import NousChoisir from "../components/about/NousChoisir";
import Vision from "../components/about/Vision";
import Engagement from "../components/about/Engagement";
import Objectifs from "../components/about/Objectifs";
import Action from "../components/about/Action";

function About() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Histoire />
      <Mission />
      <Equipe />
      <Expertise />
      <NousChoisir />
      <Vision />
      <Engagement />
      <Objectifs />
      <Action />
      <Footer />
    </>
  );
}

export default About;
