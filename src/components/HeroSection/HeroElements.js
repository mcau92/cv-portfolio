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
  @media screen and (max-width: 430px) {
    object-fit: inherit;
    width: 140%;
    transform: translateX(-10%);
  }

  @media screen and (max-width: 350px) {
    object-fit: inherit;
    width: 160%;
    transform: translateX(-15%);
  }
`;
export const HeroContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    transform: translateY(0) !important;
  }
  @media screen and (max-height: 668px) {
    transform: translateY(0) !important;
  }
  @media screen and (max-height: 520px) {
    transform: translateY(10%) !important;
  }
`;
export const HeroImgContainer = styled.div`
  overflow: hidden;
`;
export const HeroImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 150px;
  border: solid 5px;
  border-color: rgb(241, 113, 27);

  @media screen and (max-width: 580px) {
    height: 120px;
    width: 120px;
    border-radius: 120px;
  }

  @media screen and (max-height: 520px) {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
`;
export const HeroH1 = styled.h1`
  color: rgb(241, 113, 27);
  font-size: 44px;
  letter-spacing: 1.8px;
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
  @media screen and (max-width: 276px) {
    font-size: 24px;
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
    font-size: 18px;
  }

  @media screen and (max-width: 372px) {
    font-size: 16px;
  }
  @media screen and (max-width: 276px) {
    font-size: 14px;
  }
  @media screen and (max-height: 520px) {
    font-size: 16px;
  }
`;

export const HeroPTypeWriter = styled.p`
  color: white;
  margin-top: 0;
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 372px) {
    font-size: 10px;
  }
  @media screen and (max-width: 276px) {
    font-size: 8px;
  }
  @media screen and (max-height: 520px) {
    font-size: 12px;
  }
`;

export const LinksLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const LinksWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: white;
  border-radius: 40px;
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
  }
`;

export const LinksIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;
