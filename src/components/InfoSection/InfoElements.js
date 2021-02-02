import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010106")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 805px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 25px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 25px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: rgb(241, 113, 27);
  font-size: 24px;
  line-height: 100%;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-family: "Architects Daughter", cursive;
  margin-bottom: 30px;

  @media screen and (max-width: 807px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 100%;
  font-size: 20px;
  font-family: "Slabo 27px", serif;
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
  max-width: 450px;
  height: 30%;
  margin: 0;
  padding: 100px 0;
  @media screen and (max-width: 805px) {
    padding-left: 50px;
  }
  @media screen and (max-width: 570px) {
    padding-left: 25px;
  }
  @media screen and (max-width: 530px) {
    padding-left: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`;
