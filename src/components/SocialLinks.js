import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px; /* Adjust the size as needed */
    height: 25px; /* Adjust the size as needed */
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    text-decoration: none;
    transition: background-color 0.3s, transform 0.3s;
    margin-left: 10px;
    &:hover {
      background-color: darken(${(props) => props.theme.colors.primary}, 10%);
      transform: scale(1.1);
    }

    svg {
      width: 16px; /* Adjust the icon size as needed */
      height: 16px; /* Adjust the icon size as needed */
    }
  }
`;

const SocialLinks = () => {
  return (
    <Container>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </Container>
  );
};

export default SocialLinks;
