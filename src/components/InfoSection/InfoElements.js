import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010106")};

  @media screen and (max-width: 805px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2" "col3 col4";

  @media screen and (max-width: 805px) {
    grid-template-areas: "col1" "col2" "col4" "col3";
  }
`;

export const Column1 = styled.div`
  padding: 25px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;
export const Column3 = styled.div`
  grid-area: col3;
`;
export const Column4 = styled.div`
  padding: 25px;
  grid-area: col4;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: rgb(241, 113, 27);
  font-size: 20px;
  line-height: 100%;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 25px;

  @media screen and (max-width: 807px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 100%;
  font-size: 16px;
  line-height: 1.6;
  text-align: justify;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const Higlighted = styled.text`
  font-weight: bold;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 350px;
  height: 20%;
  margin: 0;
  padding: 0 20%;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`;
