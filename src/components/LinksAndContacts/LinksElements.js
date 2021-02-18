import styled from "styled-components";

export const LinksAndContactsContainer = styled.div`
  padding: 5px 0;
  width: 100%;
  background-color: #181818;
  align-items: center;
  justify-content: center;
`;

export const LinksCopyrigth = styled.p`
  font-size: 10px;
  text-align: center;
  color: gray;
`;

export const LinksUpdateInfo = styled.p`
  font-size: 10px;
  text-align: center;
  color: gray;
`;

export const LinksH1 = styled.h1`
  text-align: center;
  margin-top: 0;

  color: rgb(241, 113, 27);
  text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000;

  @media screen and (max-width: 700px) {
    font-size: 26px;
  }
  @media screen and (max-width: 590px) {
    font-size: 24px;
  }
`;
