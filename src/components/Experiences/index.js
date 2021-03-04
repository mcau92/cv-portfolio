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
  DownloadResume,
  DownloadLink,
  EducationDuration,
} from "./ExperiencesElements";
import euris from "../../images/euris.png";
import uninettuno from "../../images/uninettuno-logo.png";
import hschool from "../../images/hs-logo.png";
import pdf from "../../resume/resume.pdf";
import google from "../../images/google-logo.png";
import coursera from "../../images/coursera-logo.png";
import admo from "../../images/admo.png";
import enac from "../../images/enac.jpg";
const Experiences = () => {
  const eurisDate = getEurisDate();
  const googlepython =
    "https://coursera.org/share/9d182009d1fcc0d513c3c889c3db3a1c";
  const stanford =
    "https://coursera.org/share/645735adbeab968bce92e87d881d0702";
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
                    • Design and Develop web application using Java and Spring
                    Framework with microservices architecture. <br />• Software
                    test, build and deploy automation using CI and CD practices.
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
                    Undergraduate Bachelor’s degree - Computer engineering
                  </EducationDescription>
                  <EducationDuration>2020-present</EducationDuration>
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
              <EducationTitleH3>IT Certification</EducationTitleH3>
              <EducationWrapper>
                <Col1>
                  <Image src={google} />
                </Col1>
                <Col2BorderBottom>
                  <EducationTitle>Google</EducationTitle>
                  <EducationDescription>
                    <a
                      href={googlepython}
                      style={{
                        textDecoration: "none",
                        color: "rgb(241, 113, 27)",
                      }}
                    >
                      Crash course on Python
                    </a>
                  </EducationDescription>
                </Col2BorderBottom>
              </EducationWrapper>
              <EducationWrapper>
                <Col1>
                  <Image src={coursera} />
                </Col1>
                <Col2>
                  <EducationTitle>Coursera-Standfor University</EducationTitle>
                  <EducationDescription>
                    <a
                      href={stanford}
                      style={{
                        textDecoration: "none",
                        color: "rgb(241, 113, 27)",
                      }}
                    >
                      Machine Learning
                    </a>
                  </EducationDescription>
                </Col2>
              </EducationWrapper>
              <EducationTitleH3>Other Certification</EducationTitleH3>
              <EducationWrapper>
                <Col1>
                  <Image src={enac} />
                </Col1>
                <Col2BorderBottom>
                  <EducationTitle>ENAC</EducationTitle>
                  <EducationDescription>
                    APR Pilot Attestation
                  </EducationDescription>
                </Col2BorderBottom>
              </EducationWrapper>
              <EducationTitleH3>Volunteering</EducationTitleH3>
              <EducationWrapper>
                <Col1>
                  <Image src={admo} />
                </Col1>
                <Col2>
                  <EducationTitle>ADMO - Regione Veneto</EducationTitle>
                  <EducationDescription>Marrow Donor</EducationDescription>
                </Col2>
              </EducationWrapper>
            </EducationContainer>
            <DownloadResume>
              <DownloadLink href={pdf} download>
                Download Resume
              </DownloadLink>
            </DownloadResume>
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
