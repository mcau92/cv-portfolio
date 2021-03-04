import styled from "styled-components";

export const ExperienceContainer = styled.div`
  background: white;
`;

export const ExperienceSection = styled.div`
  padding: 5% 15%;

  @media screen and (max-width: 780px) {
    padding: 5% 8%;
  }
  @media screen and (max-width: 520px) {
    padding: 5% 2%;
  }
`;
export const ExperienceSectionDivWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f9f9f9;
`;
export const WorkContainer = styled.div``;
export const EducationContainer = styled.div`
  border-top: thin solid lightgray;
`;

//work
export const WorkTitleH3 = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: bold;
  padding: 20px 15px;
  padding-bottom: 10px;
  color: rgb(241, 113, 27);
`;

export const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-areas: "col1 col2" "col3 col4";
  padding-bottom: 25px;
  @media screen and (max-width: 520px) {
    grid-template-columns: 23% auto;
  }
`;
export const Col1 = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  grid-area: col1;
`;
export const Image = styled.img`
  min-height: 55%;
  max-height: 65%;
  max-width: 4rem;
  @media screen and (max-width: 520px) {
    max-width: 3rem;
    max-height: 45%;
  }
`;
export const Col2 = styled.div`
  padding: 25px 5px;
  grid-area: col2;
`;
export const WorkTitle = styled.h4`
  margin: 0;
  text-align: left;
  padding-bottom: 5px;
  font-weight: 900;
`;
export const WorkDuration = styled.h5`
  font-weight: normal;
  margin: 0;
  text-align: left;
`;

export const Col3 = styled.div`
  padding: 5px 50%;
  grid-area: col3;
`;
export const VerticalLine = styled.div`
  border-right: thin solid gray;
  height: 100%;
`;
export const Col4 = styled.div`
  align-items: flex-start;
  padding: 5px;
  padding-right: 20px;
  grid-area: col4;
`;
export const WorkDescription = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
  line-height: 1.6;
`;
export const WorkDescriptionTitle = styled.h4`
  margin: 0;
  text-align: left;
  font-weight: 900;
`;
export const WorkDescriptionDuration = styled.h5`
  margin: 0;
  text-align: left;
  font-weight: normal;
  letter-spacing: 1px;
`;

//education

export const EducationTitleH3 = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: bold;
  padding: 20px 15px;
  padding-bottom: 10px;
  color: rgb(241, 113, 27);
`;
export const EducationDuration = styled.h6`
  font-weight: normal;
  margin: 0;
  padding-top: 5px;
  text-align: left;
`;
export const EducationWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-areas: "col1 col2" "col3 col4";
  padding-bottom: 25px;
`;
export const EducationTitle = styled.h4`
  margin: 0;
  text-align: left;
  padding: 5px 0;
  font-weight: 900;
`;
export const EducationDescription = styled.h5`
  font-weight: normal;
  margin: 0;
  text-align: left;
`;
export const Col2BorderBottom = styled.div`
  padding: 25px;
  padding-left: 5px;
  grid-area: col2;
  border-bottom: thin solid lightgray;
`;
export const DownloadResume = styled.button`
  float: right;
  background-color: green;
  margin: 10px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(241, 113, 27);
  }
`;

export const DownloadLink = styled.a`
  text-decoration: none;
  color: white;
`;
