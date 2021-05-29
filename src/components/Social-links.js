import React from "react";
import Styled from "styled-components";

import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <SocialStyles>
      <FaFacebook />
      <FaLinkedinIn />
      <FaGithub />
      <FaTwitter />
    </SocialStyles>
  );
};

const SocialStyles = Styled.div`
  display: flex;
  color: #45505b;
  width: 29rem;
  justify-content: space-between;
  transition:0.4s ;
  


  &:hover{
      color :white;
      cursor:pointer;
  }


`;

export default SocialLinks;
