import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Icon onClick={() => setIsOpen(!isOpen)}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={() => setIsOpen(!isOpen)}
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="experiences_skills"
            onClick={() => setIsOpen(!isOpen)}
            offset={-80}
          >
            Experiences
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
