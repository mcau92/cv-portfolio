import React from "react";
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
  VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImgContainer>
          <HeroImg src={me} />
        </HeroImgContainer>
        <HeroH1>Hey! What's up?</HeroH1>
        <HeroP>
          <Typewriter
            string="My name is Michael Cauduro and i'm a Software Engineer"
            delay={70}
            cursor="_"
          />{" "}
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;