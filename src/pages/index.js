import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import LinksAndContacts from "../components/LinksAndContacts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Software from "../components/Software";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Software></Software>
      <LinksAndContacts />
    </>
  );
};

export default Home;
