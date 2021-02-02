import styled from "styled-components";

export const SoftwareTitle = styled.h2`
  text-align: center;
  padding: 10px 0;
  font-family: "Roboto Mono", monospace;
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
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 260px;
  padding: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const SoftwareIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const SoftwareH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SoftwareH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const SoftwareP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
