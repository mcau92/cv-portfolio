import React from "react";
import Software from "./Software/index";
import {
  ExperienceContainer,
  ExperienceSection,
  WorkContainer,
  EducationContainer,
  WorkTitleH3,
  Image,
  WorkWrapper,
  Col1,
  Col2,
  Col3,
  Col4,
  WorkTitle,
  WorkDuration,
  WorkDescription,
  WorkDescriptionTitle,
  WorkDescriptionDuration,
  VerticalLine,
  ExperienceSectionDivWrapper,
  EducationTitleH3,
  EducationWrapper,
  EducationTitle,
  EducationDescription,
  Col2BorderBottom,
} from "./ExperiencesElements";
import euris from "../../images/euris.png";
import uninettuno from "../../images/uninettuno-logo.jpg";
import hschool from "../../images/hs-logo.png";
const Experiences = () => {
  const eurisDate = getEurisDate();

  return (
    <>
      <ExperienceContainer id="experiences_skills">
        <ExperienceSection>
          <ExperienceSectionDivWrapper>
            <WorkContainer>
              <WorkTitleH3>Work Experiences</WorkTitleH3>
              <WorkWrapper>
                <Col1>
                  <Image src={euris} />
                </Col1>
                <Col2>
                  <WorkTitle>Gruppo Euris Spa</WorkTitle>
                  <WorkDuration>{eurisDate}</WorkDuration>
                </Col2>
                <Col3>
                  <VerticalLine />
                </Col3>
                <Col4>
                  <WorkDescription>
                    <WorkDescriptionTitle>
                      Java Software Developer
                    </WorkDescriptionTitle>
                    <WorkDescriptionDuration>
                      november 2018-present
                    </WorkDescriptionDuration>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </WorkDescription>
                </Col4>
              </WorkWrapper>
            </WorkContainer>
            <EducationContainer>
              <EducationTitleH3>Education Experiences</EducationTitleH3>
              <EducationWrapper>
                <Col1>
                  <Image src={uninettuno} />
                </Col1>
                <Col2BorderBottom>
                  <EducationTitle>
                    Università Telematica Internazionale Uninettuno
                  </EducationTitle>
                  <EducationDescription>
                    Bachelor's degree - Computer engineering
                  </EducationDescription>
                </Col2BorderBottom>
              </EducationWrapper>
              <EducationWrapper>
                <Col1>
                  <Image src={hschool} />
                </Col1>
                <Col2>
                  <EducationTitle>I.T.S. Luigi Einaudi</EducationTitle>
                  <EducationDescription>
                    Secondary School Diploma - IT Engineer
                  </EducationDescription>
                </Col2>
              </EducationWrapper>
            </EducationContainer>
          </ExperienceSectionDivWrapper>
        </ExperienceSection>
        <Software />
      </ExperienceContainer>
    </>
  );
};

function getEurisDate() {
  var years = new Date().getFullYear() - 2018;
  var months = new Date().getMonth() + 1 - 11;
  if (months < 0) {
    years--;
    months = months + 12;
  }

  return years + " year " + months + " months";
}
export default Experiences;
