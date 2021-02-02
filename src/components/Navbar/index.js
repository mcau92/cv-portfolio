import React from "react";
import { FaBars } from "react-icons/fa";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">M.C.</NavLogo>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experiences">Experiences</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="software">Software</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="links_contacts">Links and Contacts</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
