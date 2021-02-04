import React from "react";
import Carousel from "react-elastic-carousel";
import Angular from "../../images/angular-logo.png";
import Git from "../../images/git-logo.png";
import Java from "../../images/java.svg";
import Oracle from "../../images/database.svg";
import Python from "../../images/python-logo.png";
import Spring from "../../images/spring-logo.png";
import "./index.css";
import {
  SoftwareCard,
  SoftwareCarouselContainer,
  SoftwareContainer,
  SoftwareIcon,
  SoftwareP,
  SoftwareTitle,
} from "./SoftwareElements";

const Software = () => {
  const data = [
    { image: Java, p: "Professional experience", color: "white" },
    {
      image: Spring,
      p: "Professional experience",
      color: "white",
    },
    {
      image: Oracle,
      p: "Professional experience",
      color: "white",
    },
    {
      image: Git,
      p: "Professional experience",
      color: "white",
    },
    { image: Python, p: "Personal experience", color: "white" },

    {
      image: Angular,
      p: "Personal experience",
      color: "white",
    },
    {
      image: Angular,
      p: "Personal experience",
      color: "white",
    },
    {
      image: Angular,
      p: "Personal experience",
      color: "white",
    },
  ];
  const listSoftware = data.map((d) => (
    <SoftwareCard color={d.color}>
      <SoftwareIcon src={d.image} />
    </SoftwareCard>
  ));
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <>
      <SoftwareContainer id="software">
        <SoftwareTitle>
          Some of the languages and technologies used belong my career
        </SoftwareTitle>
        <SoftwareCarouselContainer>
          <Carousel
            autoPlaySpeed={3000}
            autoPlay={true}
            breakPoints={breakPoints}
          >
            {listSoftware}
          </Carousel>
        </SoftwareCarouselContainer>
      </SoftwareContainer>
    </>
  );
};

export default Software;
