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
  const [isOpen, setIsOpen] = useState(false);
  var isInstagram = true;
  if (
    window.innerHeight === window.screen.height &&
    navigator.userAgent.match(/instagram/i)
  ) {
    isInstagram = true;
  }
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
