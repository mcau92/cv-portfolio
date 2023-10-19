import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-typewriting-effect";
import gitLink from "../../images/git-link-logo.png";
import me from "../../images/myphoto.jpg";
import unsplash from "../../images/unsplash-icon.png";
import ig from "../../images/ig.jpg";
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
  ToAbout,
} from "./HeroElements";

const HeroSection = ({ isLoading, setIsLoading }) => {
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
            onLoadStart={() =>
              setTimeout(() => {
                setIsLoading(false);
              }, 3000)
            }
          />
        </HeroBg>
        <HeroContent>
          <HeroImgContainer>
            <HeroImg src={me} />
          </HeroImgContainer>
          <HeroH1>Hey! What's up?</HeroH1>
          <HeroP>My name is Michael Cauduro</HeroP>
          <HeroPTypeWriter>
            {isLoading ? null : (
              <Typewriter string="Software Engineer" delay={90} cursor="_" />
            )}
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
            <LinksWrapper href="https://www.instagram.com/mikecode_">
              <LinksIcon src={ig} title="Instagram" />
            </LinksWrapper>
          </LinksLogoContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
