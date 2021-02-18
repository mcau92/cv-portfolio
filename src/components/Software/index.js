import React from "react";
import Carousel from "react-elastic-carousel";
import Angular from "../../images/angular-logo.png";
import Aws from "../../images/aws-logo.png";
import Sql from "../../images/database.svg";
import Devops from "../../images/devops-logo.png";
import Docker from "../../images/doker-logo.png";
import Flutter from "../../images/flutter-logo.png";
import Git from "../../images/git-logo.png";
import Heroku from "../../images/heroku-logo.png";
import Java from "../../images/java.svg";
import Jenkins from "../../images/jenkins-logo.png";
import NodeLogo from "../../images/node-logo.png";
import Postman from "../../images/postman-logo.png";
import Python from "../../images/python-logo.svg";
import ReactLogo from "../../images/react-logo.png";
import Spring from "../../images/spring-logo.png";
import "./index.css";
import {
  SoftwareCard,
  SoftwareCarouselContainer,
  SoftwareContainer,
  SoftwareIcon,
  SoftwareLevelDescription,
  SoftwareLevelDescriptionTitle,
  SoftwareTitle,
} from "./SoftwareElements";

const Software = () => {
  const professional = "#49be5c";
  const nonprofessional = "rgb(241, 113, 27)";
  const data = [
    { image: Java, color: professional },
    {
      image: Spring,
      color: professional,
    },
    {
      image: Git,
      color: professional,
    },
    {
      image: Sql,
      color: professional,
    },
    { image: Postman, color: professional },

    {
      image: Devops,
      color: professional,
    },
    {
      image: Jenkins,
      color: professional,
    },
    {
      image: Docker,
      color: professional,
    },
    { image: Python, color: nonprofessional },
    {
      image: Angular,
      color: nonprofessional,
    },
    {
      image: Flutter,
      color: nonprofessional,
    },

    {
      image: ReactLogo,
      color: nonprofessional,
    },

    {
      image: NodeLogo,
      color: nonprofessional,
    },
    {
      image: Heroku,
      color: nonprofessional,
    },
    {
      image: Aws,
      color: nonprofessional,
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
    { width: 550, itemsToShow: 3 },
    { width: 750, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <>
      <SoftwareContainer id="software">
        <SoftwareTitle>Software Skills</SoftwareTitle>
        <SoftwareCarouselContainer>
          <Carousel
            autoPlaySpeed={3000}
            autoPlay={true}
            breakPoints={breakPoints}
          >
            {listSoftware}
          </Carousel>
        </SoftwareCarouselContainer>
        <SoftwareLevelDescription>
          <SoftwareLevelDescriptionTitle color={professional}>
            Professional Experience
          </SoftwareLevelDescriptionTitle>
          <SoftwareLevelDescriptionTitle color={nonprofessional}>
            Personal Experience
          </SoftwareLevelDescriptionTitle>
        </SoftwareLevelDescription>
      </SoftwareContainer>
    </>
  );
};

export default Software;
