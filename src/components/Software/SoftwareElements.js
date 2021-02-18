import styled from "styled-components";

export const SoftwareTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: rgb(241, 113, 27);
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  font-weight: bold;
  margin: 20px 0;
`;
export const SoftwareContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #0c0c0c;
  z-index: 1;
`;
export const SoftwareCarouselContainer = styled.div`
  font-family: sans-serif;
  display: block;
  align-items: center;
  justify-content: center;
`;
export const SoftwareCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 130px;
  justify-content: center;
  background-color: white;
  align-items: center;
  border: 7px solid;
  border-color: ${(props) => props.color};
  border-radius: 50px;
  height: 130px;
  padding: 10px;
  margin: 30px 0;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const SoftwareIcon = styled.img`
  height: auto;
  width: 80%;
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