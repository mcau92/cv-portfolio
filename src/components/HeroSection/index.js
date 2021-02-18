import React, { useEffect } from "react";
import me from "../../images/myphoto.png";
import Video from "../../videos/video2.mp4";
import { Typewriter } from "react-typewriting-effect";
import {
  HeroBg,
  HeroContainer,
  HeroImgContainer,
  HeroImg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroPTypeWriter,
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
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
