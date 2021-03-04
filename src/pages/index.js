import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Experiences from "../components/Experiences";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import LinksAndContacts from "../components/LinksAndContacts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { HomeContainer } from "./HomeElement";

const Home = ({ isLoading, setIsLoading }) => {
  AOS.init({ duration: 1000, easing: "ease-in" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HomeContainer isLoading={isLoading}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection isLoading={isLoading} setIsLoading={setIsLoading} />
      <InfoSection {...homeObjOne} />
      <Experiences />
      <LinksAndContacts />
    </HomeContainer>
  );
};

export default Home;
