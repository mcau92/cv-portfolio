import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const LinksAndContactsContainer = styled.div`
  width: 100%;
  background-color: #181818;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const LinksLogo = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  font-family: "Dancing Script", cursive;
  text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  cursor: default;
  color: rgb(241, 113, 27);
  margin: 0;
  padding-bottom: 15px;
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;
export const LinksRef = styled(LinkS)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 7px;
  height: 100%;
  font-size: 13px;
  &:hover {
    color: rgb(241, 113, 27);
  }
`;

export const LinksLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

export const LinksWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: white;
  border-radius: 50px;
  overflow: hidden;
`;

export const LinksIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

export const LinksCopyrigth = styled.p`
  font-size: 10px;
  text-align: center;
  color: gray;
`;
