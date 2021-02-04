import styled from "styled-components";

export const SoftwareTitle = styled.h2`
  text-align: center;
  padding-bottom: 40px;
  color: white;
  font-weight: bold;
`;
export const SoftwareContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: black;
`;
export const SoftwareCarouselContainer = styled.div`
  font-family: sans-serif;
  display: block;
  align-items: center;
  justify-content: center;
`;
export const SoftwareCard = styled.div`
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  flex: 0 0 150px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 140px;
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
