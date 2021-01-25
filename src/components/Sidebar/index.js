import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}>
            <Icon onClick={()=>setIsOpen(!isOpen)}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={()=>setIsOpen(!isOpen)}>About</SidebarLink>
                    <SidebarLink to="experiences" onClick={()=>setIsOpen(!isOpen)}>Experiences</SidebarLink>
                    <SidebarLink to="links_contacts" onClick={()=>setIsOpen(!isOpen)}>Links and Contacts</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar

