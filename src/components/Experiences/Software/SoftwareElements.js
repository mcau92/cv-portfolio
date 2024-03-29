import styled from "styled-components";

export const SoftwareTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: rgb(241, 113, 27);
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 20px 0;
`;
export const SoftwareContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f9f9f9;
`;
export const SoftwareCarouselContainer = styled.div`
  font-family: sans-serif;
  display: block;
  align-items: center;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
`;
export const SoftwareCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 120px;
  justify-content: center;
  background-color: white;
  align-items: center;
  border: 7px solid;
  border-color: ${(props) => props.color};
  border-radius: 50px;
  height: 5rem;
  padding: 8px;
  margin: 30px 0;

  &:focus {
    outline: none;
  }
`;

export const SoftwareIcon = styled.img`
  min-height: 40%;
  min-width: 60%;
  max-height: 100%;
  max-width: 70%;
  pointer-events: none;
  cursor: default;
`;

export const SoftwareH2 = styled.h2`
  font-size: 1rem;
`;

export const SoftwareP = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 35px;
`;

export const SoftwareLevelDescription = styled.div`
  height: 40px;
`;

export const SoftwareLevelDescriptionTitle = styled.div`
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color};
`;
