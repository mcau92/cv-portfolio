import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import gitLink from "../../images/git-link-logo.png";
import unsplash from "../../images/unsplash-icon.png";
import ContactForm from "./form/index";
import {
  LinksAndContactsContainer,
  LinksCopyrigth,
  LinksH1,
  LinksH2,
  LinksIcon,
  LinksLogoContainer,
  LinksWrapper,
} from "./LinksElements";

const LinksAndContacts = () => {
  return (
    <>
      <LinksAndContactsContainer id="links_contacts">
        <LinksH1>Thank's to being here!</LinksH1>
        <LinksH2>
          Please contact me or follow me to my socials! see you there
        </LinksH2>
        <ContactForm />
        <LinksLogoContainer>
          <LinksWrapper href="mailto:michael.cauduro.dev@gmail.com">
            <SiGmail size={23} color="red" title="Gmail" />
          </LinksWrapper>
          <LinksWrapper href="https://www.linkedin.com/in/michael-cauduro-61936ab5">
            <FaLinkedinIn size={23} color="#0075B5" title="Linkedin" />
          </LinksWrapper>
          <LinksWrapper href="https://github.com/mcau92">
            <LinksIcon src={gitLink} title="Github" />
          </LinksWrapper>
          <LinksWrapper href="https://unsplash.com/@mcau92">
            <LinksIcon src={unsplash} title="Unsplash" />
          </LinksWrapper>
        </LinksLogoContainer>

        <LinksCopyrigth>
          Copyright © {new Date().getFullYear()} All rights reserved | This
          template is created using React and made by Michael Cauduro
        </LinksCopyrigth>
      </LinksAndContactsContainer>
    </>
  );
};

export default LinksAndContacts;
