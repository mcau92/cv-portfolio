import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toogleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toogleHome}>M.C.</NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experiences"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Experiences
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="software"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Software
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="links_contacts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Links and Contacts
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
