import React from "react";
import {
  Column1,
  Column2,
  Column3,
  Column4,
  Higlighted,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  darkText,
  alt,
  img,
  img2,
  heading,
  lightText,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper data-aos="zoom-in">
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>
                  I’m a Java software engineer. Being a{" "}
                  <Higlighted>determined professional</Higlighted>, I try
                  everyday to develop new skills and enhance my current
                  abilities in this field.{" "}
                  <Higlighted>Passion and curiosity</Higlighted> drive me to
                  increase my knowledge about computer science: I wish to
                  embrace emerging technology and stay on top of trends. The{" "}
                  <Higlighted>dedication</Higlighted> to my field leads me to
                  share what I learn and to bring my unique perspectives to
                  collaborative teams, in order to{" "}
                  <Higlighted>solve problems</Higlighted> in a creative and
                  strategic way and <Higlighted>achieve</Higlighted> the set
                  objectives.<Higlighted>Teamwork</Higlighted> is one of my
                  greatest strength: I think that{" "}
                  <Higlighted>great achievements</Higlighted> are the product of{" "}
                  <Higlighted>great collaborations</Higlighted> and team effort.
                  Actually, I believe that{" "}
                  <Higlighted>building relationships</Higlighted> and nurturing
                  them is important{" "}
                  <Higlighted>
                    to grow both professionally and personally.
                  </Higlighted>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
            <Column3>
              <ImgWrap>
                <Img src={img2} alt={alt} />
              </ImgWrap>
            </Column3>
            <Column4>
              <TextWrapper>
                <Subtitle darkText={darkText}>
                  I’m a Java software engineer. Being a{" "}
                  <Higlighted>determined professional</Higlighted>, I try
                  everyday to develop new skills and enhance my current
                  abilities in this field.{" "}
                  <Higlighted>Passion and curiosity</Higlighted> drive me to
                  increase my knowledge about computer science: I wish to
                  embrace emerging technology and stay on top of trends. The{" "}
                  <Higlighted>dedication</Higlighted> to my field leads me to
                  share what I learn and to bring my unique perspectives to
                  collaborative teams, in order to{" "}
                  <Higlighted>solve problems</Higlighted> in a creative and
                  strategic way and <Higlighted>achieve</Higlighted> the set
                  objectives.<Higlighted>Teamwork</Higlighted> is one of my
                  greatest strength: I think that{" "}
                  <Higlighted>great achievements</Higlighted> are the product of{" "}
                  <Higlighted>great collaborations</Higlighted> and team effort.
                  Actually, I believe that{" "}
                  <Higlighted>building relationships</Higlighted> and nurturing
                  them is important{" "}
                  <Higlighted>
                    to grow both professionally and personally.
                  </Higlighted>
                </Subtitle>
              </TextWrapper>
            </Column4>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
