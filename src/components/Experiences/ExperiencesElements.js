import styled from "styled-components";

export const ExperienceContainer = styled.div``;

export const ExperienceSection = styled.div`
  background: #0c0c0c;
  padding: 5% 15%;

  @media screen and (max-width: 780px) {
    padding: 5% 8%;
  }
`;
export const WorkContainer = styled.div`
  background: red;
`;
export const EducationContainer = styled.div`
  background: green;
`;

//work
export const WorkTitleH3 = styled.h3`
  margin: 0;
  text-align: left;
  padding: 5px;
  color: rgb(241, 113, 27);
`;

export const WorkWrapper = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 110px auto;
  grid-template-areas: "col1 col2" "col3 col4";
`;
export const Col1 = styled.div`
  display: flex;
  padding: 5px;
  grid-area: col1;
`;
export const WorkImage = styled.img`
  min-height: 50px;
  max-height: 75px;
  max-width: 100px;
`;
export const Col2 = styled.div`
  padding: 25px;
  padding-left: 5px;
  grid-area: col2;
`;
export const WorkTitle = styled.h4`
  margin: 0;
  text-align: left;
  font-weight: 900;
`;
export const WorkDuration = styled.h5`
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
  letter-spacing: 1px;
`;

//
