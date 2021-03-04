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
                  I’m a 28 years old Java Software Engineer from Italy (TV).
                  <br />
                  Being a <Higlighted>determined professional</Higlighted>, I
                  try everyday to develop new skills and enhance my current
                  abilities in this field. .<br />
                  <Higlighted>Passion and curiosity</Higlighted> drive me to
                  increase my knowledge about computer science: I wish to
                  embrace emerging technology and stay on top of trends.
                  <br /> The <Higlighted>dedication</Higlighted> to my field
                  leads me to share what I learn and to bring my unique
                  perspectives to collaborative teams, in order to{" "}
                  <Higlighted>solve problems</Higlighted> in a creative and
                  strategic way and <Higlighted>achieve</Higlighted> the set
                  objectives.
                  <br />
                  <Higlighted>Teamwork</Higlighted> is one of my greatest
                  strength: I think that{" "}
                  <Higlighted>great achievements</Higlighted> are the product of{" "}
                  <Higlighted>great collaborations</Higlighted> and team effort.
                  <br />
                  Actually, I believe that{" "}
                  <Higlighted>building relationships</Higlighted> and nurturing
                  them is important to <Higlighted>grow</Higlighted> both{" "}
                  <Higlighted>professionally</Higlighted> and{" "}
                  <Higlighted>personally.</Higlighted>
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
                  I like <Higlighted>photography</Higlighted>,{" "}
                  <Higlighted>sports</Higlighted> and{" "}
                  <Higlighted>animals</Higlighted>.<br /> Cultivating my{" "}
                  <Higlighted>passions</Higlighted> makes me happy and helps me{" "}
                  <Higlighted>disconnect</Higlighted> from my{" "}
                  <Higlighted>daily routine</Higlighted>. <br />
                  In my free time, I usually go to the gym or I play with my
                  dog.
                  <br /> Since I love the <Higlighted>adventure</Higlighted>, I
                  enjoy exploring new places, whenever I can.
                  <br /> On these occasions, I usually take lots of{" "}
                  <Higlighted>pictures</Higlighted> with my drone and my camera.
                  It’s a way for me to <Higlighted>preserve</Higlighted> not
                  only the <Higlighted>memory</Higlighted> of the places I
                  visited, but also the <Higlighted>emotions</Higlighted> they
                  made me feel.
                  <br /> If you wish to see some of the pictures I’ve taken,
                  feel free to check my{" "}
                  <a
                    href="https://unsplash.com/@mcau92"
                    style={{
                      color: "rgb(241, 113, 27)",
                      textDecoration: "none",
                    }}
                  >
                    Unsplash
                  </a>{" "}
                  account . <br />
                  In my opinion, <Higlighted>cultivating hobbies</Higlighted> is
                  important, because they allow you to{" "}
                  <Higlighted>improve</Higlighted> your mental strength and
                  experience <Higlighted>positive vibes</Higlighted>.<br />{" "}
                  Therefore, they are <Higlighted>key elements</Higlighted> to
                  achieve your <Higlighted>daily commitments</Higlighted>.
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
