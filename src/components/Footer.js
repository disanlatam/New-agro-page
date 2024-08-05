import React from "react";
import styled from "styled-components";
import logo from "../assets/white-DISAN-logo.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 5% 2%;
  color: "white";
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const NavLink = styled(Link)`
  //   font-weight: bold;
  text-decoration: none;
  color: white;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
`;

// Define el componente Footer
const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://disanlatinoamerica.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo src={logo} alt="DISAN logo" />
      </a>
      <LinksContainer>
        <NavLink to="/careers">Trabaja con nosotros</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contáctanos</NavLink>
        <NavLink to="/ISO-cert">Certificación multisitio ISO 9001</NavLink>
        <NavLink to="/etica-&-conducta" className="last">
          Código de ética y conducta
        </NavLink>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
