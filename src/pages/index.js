import React, { useState } from "react";
import Experiences from "../components/Experiences";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import LinksAndContacts from "../components/LinksAndContacts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  AOS.init({ duration: 1000, easing: "ease-in-out" });
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Experiences />
      <LinksAndContacts />
    </>
  );
};

export default Home;
