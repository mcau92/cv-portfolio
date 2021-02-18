import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-typewriting-effect";
import gitLink from "../../images/git-link-logo.png";
import me from "../../images/myphoto.png";
import unsplash from "../../images/unsplash-icon.png";
import Video from "../../videos/video2.mp4";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroImg,
  HeroImgContainer,
  HeroP,
  HeroPTypeWriter,
  LinksIcon,
  LinksLogoContainer,
  LinksWrapper,
  VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            playsInline
            loop
            autoPlay
            muted
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroImgContainer>
            <HeroImg src={me} />
          </HeroImgContainer>
          <HeroH1>Hey! What's up?</HeroH1>
          <HeroP>My name is Michael Cauduro</HeroP>
          <HeroPTypeWriter>
            <Typewriter string="Software Engineer" delay={70} cursor="_" />{" "}
          </HeroPTypeWriter>
          <LinksLogoContainer>
            <LinksWrapper href="mailto:michael.cauduro.dev@gmail.com">
              <SiGmail size={23} color="red" title="Gmail" />
            </LinksWrapper>
            <LinksWrapper href="https://www.linkedin.com/in/michael-cauduro-61936ab5">
              <FaLinkedinIn size={23} color="#0075B5" title="Linkedin" />
            </LinksWrapper>
            <LinksWrapper href="https://github.com/mcau92">
              <LinksIcon src={gitLink} title="Github" />
            </LinksWrapper>
            <LinksWrapper href="https://unsplash.com/@mcau92">
              <LinksIcon src={unsplash} title="Unsplash" />
            </LinksWrapper>
          </LinksLogoContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
