import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksAbout,
  NavLinksExperiece,
} from "./NavbarElements";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toogleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav id="navbar">
        <NavbarContainer>
          <NavLogo onClick={toogleHome}>M.C.</NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksAbout
                to="about"
                smooth={true}
                duration={900}
                exact="true"
                spy={true}
                offset={-70}
              >
                About
              </NavLinksAbout>
            </NavItem>
            <NavItem>
              <NavLinksExperiece
                to="experiences_skills"
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-70}
              >
                Experiences and Skills
              </NavLinksExperiece>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
