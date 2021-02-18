import React from "react";
import {
  LinksAndContactsContainer,
  LinksCopyrigth,
  LinksH1,
  LinksUpdateInfo,
} from "./LinksElements";

const LinksAndContacts = () => {
  return (
    <>
      <LinksAndContactsContainer>
        <LinksCopyrigth>
          Copyright © {new Date().getFullYear()} All rights reserved | Michael
          Cauduro
        </LinksCopyrigth>
        <LinksUpdateInfo>Last site update: 02/2021</LinksUpdateInfo>
      </LinksAndContactsContainer>
    </>
  );
};

export default LinksAndContacts;
