import React from "react";
import gitLink from "../../images/git-link-logo.png";
import linkedin from "../../images/linkedin-logo.png";
import email from "../../images/mail-logo.png";
import unsplash from "../../images/unsplash-icon.png";
import {
  LinksAndContactsContainer,
  LinksContainer,
  LinksCopyrigth,
  LinksIcon,
  LinksLogoContainer,
  LinksRef,
  LinksWrapper,
} from "./LinksElements";

const LinksAndContacts = () => {
  return (
    <>
      <LinksAndContactsContainer>
        <LinksContainer>
          <LinksRef to="home">home</LinksRef>
          <LinksRef to="about">about</LinksRef>
          <LinksRef to="experiences">experiences</LinksRef>
          <LinksRef to="software">software</LinksRef>
        </LinksContainer>

        <LinksLogoContainer>
          <LinksWrapper href="mailto:michael.cauduro.dev@gmail.com">
            <LinksIcon src={email} title="gmail" />
          </LinksWrapper>
          <LinksWrapper href="https://www.linkedin.com/in/michael-cauduro-61936ab5">
            <LinksIcon src={linkedin} title="linkedin" />
          </LinksWrapper>
          <LinksWrapper href="https://github.com/mcau92">
            <LinksIcon src={gitLink} title="github" />
          </LinksWrapper>
          <LinksWrapper href="https://unsplash.com/@mcau92">
            <LinksIcon src={unsplash} title="unsplash" />
          </LinksWrapper>
        </LinksLogoContainer>

        <LinksCopyrigth>
          Copyright ©2021 All rights reserved | This template is created using
          React and made by Michael Cauduro
        </LinksCopyrigth>
      </LinksAndContactsContainer>
    </>
  );
};

export default LinksAndContacts;
