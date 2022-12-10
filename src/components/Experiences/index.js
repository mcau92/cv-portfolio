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
        <ExperienceSection data-aos="zoom-in-right">
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
                      Team Leader & Software Engineer
                    </WorkDescriptionTitle>
                    <WorkDescriptionDuration>
                      november 2022-present
                    </WorkDescriptionDuration>
                    • I am the Team leader of a small-sized team (1 to 3 members), i usually manage and distribute task inside my team, defining the architecture and the goals of our backend components.
                      I like reviewing code and reduce software complexity, to achive the best readability and performance of our programs. Test is a must, in this era of continous changes, i think that a good code needs good tests, which help us reduce bugs and speed up their detection.
                      I also partecipate in helping functional and technical analysis to best achive customer results.
                    <WorkDescriptionTitle>Java tutor</WorkDescriptionTitle>
                    <WorkDescriptionDuration>
                      november 2021-present
                    </WorkDescriptionDuration>
                    • Be able to tutor and manage new java junior engineers,
                    from helping them settle in to teaching them new
                    technologies, based on the projects requirements that they
                    are involved.
                    <WorkDescriptionTitle>
                      Technical Interviewer
                    </WorkDescriptionTitle>
                    <WorkDescriptionDuration>
                      january 2022-present
                    </WorkDescriptionDuration>
                    • Evaluation and management of the entire technical
                    interview process for the java opened positions, from the
                    program test correction to the face-to-face tech screening.
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
