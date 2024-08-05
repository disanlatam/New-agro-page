import React, { useState } from "react";
import styled from "styled-components";
import logoDisan from "../assets/logo-disan-agro.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import LanguageSelector from "./LanguageSelector";

const Logo = styled.div`
  img {
    width: 100%;
    max-width: 150px;
    min-width: 100px;
    height: auto;
  }
`;

const LinksContainer = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 10px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.green};
    transition-delay: 0s;
  }
`;

const NavBarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
  #logo {
    background-color: white;
  }
`;

const RigthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <NavBarContainer>
      <Logo>
        <NavLink
          to="/"
          id="logo"
          onClick={() => handleLinkClick("/")}
          className={activeLink === "/" ? "active" : ""}
        >
          <img src={logoDisan} alt="DISAN Agro Logo" />
        </NavLink>
      </Logo>
      <LinksContainer>
        <NavLink
          to="/nosotros"
          onClick={() => handleLinkClick("/nosotros")}
          className={activeLink === "/nosotros" ? "active" : ""}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/portafolio"
          onClick={() => handleLinkClick("/portafolio")}
          className={activeLink === "/portafolio" ? "active" : ""}
        >
          Portafolio
        </NavLink>
        <NavLink
          to="/planes"
          onClick={() => handleLinkClick("/planes")}
          className={activeLink === "/planes" ? "active" : ""}
        >
          Planes de nutrición
        </NavLink>
        <NavLink
          to="/Sostenibilidad"
          onClick={() => handleLinkClick("/Sostenibilidad")}
          className={activeLink === "/Sostenibilidad" ? "active" : ""}
        >
          Sostenibilidad
        </NavLink>
        <NavLink
          to="/Blog"
          onClick={() => handleLinkClick("/Blog")}
          className={activeLink === "/Blog" ? "active" : ""}
        >
          Blog
        </NavLink>
      </LinksContainer>
      <RigthContainer>
        <Search />
        <LanguageSelector />
      </RigthContainer>
    </NavBarContainer>
  );
};

export default NavBar;
