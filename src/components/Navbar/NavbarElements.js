import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /*  background: ${({ scrollNav }) =>
    scrollNav ? "#181818" : "transparent"}; */
  background: #181818;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: rgb(241, 113, 27);
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  cursor: default;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: rgb(241, 113, 27);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: rgb(241, 113, 27);
  }

  &.active {
    color: rgb(241, 113, 27);
  }
`;
