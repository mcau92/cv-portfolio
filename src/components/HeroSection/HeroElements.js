import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  max-height: fit-content;
  position: relative;
  margin-top: -80px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  opacity: 0.4;
  filter: blur(3px);
`;
export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-20%);

  @media screen and (max-width: 768px) {
    transform: translateY(0) !important;
  }
`;
export const HeroImgContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  border: solid 5px;
  border-color: rgb(241, 113, 27);
  background-color: white;
  overflow: hidden;
`;
export const HeroImg = styled.img`
  height: 100%;
  width: 100%;
`;
export const HeroH1 = styled.h1`
  color: rgb(241, 113, 27);
  font-size: 48px;
  text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: white;
  margin-top: 7px;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
