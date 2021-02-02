import React from "react";
import Carousel from "react-elastic-carousel";
import Angular from "../../images/angular-logo.png";
import Java from "../../images/java-logo.png";
import Python from "../../images/python-logo.png";
import "./index.css";
import {
  SoftwareContainer,
  SoftwareCarouselContainer,
  SoftwareCard,
  SoftwareH2,
  SoftwareIcon,
  SoftwareP,
  SoftwareTitle,
} from "./SoftwareElements";

const Software = () => {
  const data = [
    { image: Java, h2: "Java", p: "Professional experience", color: "#f0f0f0" },
    { image: Python, h2: "Python", p: "Personal experience", color: "#f0f0f0" },
    {
      image: Angular,
      h2: "Angular",
      p: "Personal experience",
      color: "#f0f0f0",
    },
    {
      image: Angular,
      h2: "Angular",
      p: "Personal experience",
      color: "#f0f0f0",
    },
    {
      image: Angular,
      h2: "Angular",
      p: "Personal experience",
      color: "#f0f0f0",
    },
    {
      image: Angular,
      h2: "Angular",
      p: "Personal experience",
      color: "#f0f0f0",
    },
    {
      image: Angular,
      h2: "Angular",
      p: "Personal experience",
      color: "#f0f0f0",
    },
  ];
  const listSoftware = data.map((d) => (
    <SoftwareCard color={d.color}>
      <SoftwareIcon src={d.image} />
      <SoftwareH2>{d.h2}</SoftwareH2>
      <SoftwareP>{d.p}</SoftwareP>
    </SoftwareCard>
  ));
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <SoftwareContainer id="software">
        <SoftwareTitle>
          Languages and Software that i used belong my career
        </SoftwareTitle>
        <SoftwareCarouselContainer>
          <Carousel breakPoints={breakPoints}>{listSoftware}</Carousel>
        </SoftwareCarouselContainer>
      </SoftwareContainer>
    </>
  );
};

export default Software;
