import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  max-height: fit-content;
  position: relative;
  min-height: -webkit-fill-available !important; /* Mozilla-based browsers will ignore this. */
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  filter: blur(3px);
  @media screen and (max-width: 768px) {
    object-fit: inherit;
    width: 120%;
    transform: translateX(-5%);
  }
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
  @media screen and (max-height: 668px) {
    transform: translateY(0) !important;
  }
  @media screen and (max-height: 430px) {
    transform: translateY(10%) !important;
  }
`;
export const HeroImgContainer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 120px;
  border: solid 5px;
  border-color: rgb(241, 113, 27);
  overflow: hidden;

  @media screen and (max-height: 520px) {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
`;
export const HeroImg = styled.img`
  height: 100%;
  min-height: 100%;
  min-width: 100%;
`;
export const HeroH1 = styled.h1`
  color: rgb(241, 113, 27);
  font-size: 44px;
  text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
  @media screen and (max-width: 493px) {
    font-size: 30px;
  }
  @media screen and (max-width: 444px) {
    font-size: 28px;
  }
  @media screen and (max-width: 372px) {
    font-size: 26px;
  }
  @media screen and (max-height: 520px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: white;
  margin-top: 7px;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 493px) {
    font-size: 14px;
  }
  @media screen and (max-width: 444px) {
    font-size: 12px;
  }
  @media screen and (max-width: 372px) {
    font-size: 10px;
  }
  @media screen and (max-height: 520px) {
    font-size: 16px;
  }
`;
