import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinksAbout,
  NavLinksExperiece,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toogleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
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
                exact={"true"}
                spy={true}
                offset={-70}
                autoCorrect="true"
                className="active"
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
                exact={"true"}
                offset={-70}
                className="active"
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
