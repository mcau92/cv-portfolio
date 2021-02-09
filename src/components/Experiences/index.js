import React from "react";
import Software from "../Software/index";
import { ExperienceContainer, ExperienceSection } from "./ExperiencesElements";
const Experiences = () => {
  return (
    <>
      <ExperienceContainer id="experiences_skills">
        <ExperienceSection></ExperienceSection>
        <Software />
      </ExperienceContainer>
    </>
  );
};

export default Experiences;
