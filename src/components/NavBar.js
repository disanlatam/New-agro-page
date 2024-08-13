import React, { useState } from "react";
import styled from "styled-components";
import logoDisan from "../assets/logo-disan-agro.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import LanguageSelector from "./LanguageSelector";
import { HiOutlineMenu } from "react-icons/hi";

const Logo = styled.div`
  img {
    width: 100%;
    max-width: 150px;
    min-width: 100px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 100px;
    }
  }
`;
const LinksContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
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
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.green};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px; /* Ajusta el tamaño del icono aquí */
    color: ${(props) =>
      props.theme.colors.green}; /* Ajusta el color del icono aquí */
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.white};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  a {
    display: block;
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
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
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

      <DropdownContainer onMouseLeave={closeDropdown}>
        <DropdownButton onClick={toggleDropdown} onMouseEnter={openDropdown}>
          <HiOutlineMenu />
        </DropdownButton>
        <DropdownContent
          isOpen={isOpen}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <NavLink
            to="/nosotros"
            onClick={() => handleLinkClick("/nosotros")}
            className={activeLink === "/nosotros" ? "active" : ""}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/product-search"
            onClick={() => handleLinkClick("/product-search")}
            className={activeLink === "/product-search" ? "active" : ""}
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
        </DropdownContent>
      </DropdownContainer>

      <LinksContainer>
        <NavLink
          to="/nosotros"
          onClick={() => handleLinkClick("/nosotros")}
          className={activeLink === "/nosotros" ? "active" : ""}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/product-search"
          onClick={() => handleLinkClick("/product-search")}
          className={activeLink === "/product-search" ? "active" : ""}
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
