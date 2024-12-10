import React, { useState, useEffect } from "react";
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

const DropdownMenu = styled.div`
  position: relative;
`;

const SubMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 40px;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1000;
  min-width: 200px;

  a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const NavBarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 20px;
`;

const RigthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState(false);
  let closeTimeout = null;

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const openSustainabilityMenu = () => {
    clearTimeout(closeTimeout);
    setIsSustainabilityOpen(true);
  };

  const closeSustainabilityMenu = () => {
    closeTimeout = setTimeout(() => {
      setIsSustainabilityOpen(false);
    }, 300); // Retraso para permitir al usuario moverse
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout); // Limpiar timeout al desmontar
    };
  }, []);

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
          to="/about-us"
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
        <DropdownMenu
          onMouseEnter={openSustainabilityMenu}
          onMouseLeave={closeSustainabilityMenu}
        >
          <NavLink
            to="/Sostenibilidad"
            onClick={() => handleLinkClick("/Sostenibilidad")}
            className={activeLink === "/Sostenibilidad" ? "active" : ""}
          >
            Sostenibilidad
          </NavLink>
          <SubMenu isOpen={isSustainabilityOpen}>
            <NavLink
              to="/disan-siembra"
              onClick={() => setIsSustainabilityOpen(false)}
            >
              Disan Siembra
            </NavLink>
            <NavLink
              to="/pacto-global"
              onClick={() => setIsSustainabilityOpen(false)}
            >
              Pacto Global
            </NavLink>
            <NavLink
              to="/mayacert"
              onClick={() => setIsSustainabilityOpen(false)}
            >
              Mayacert
            </NavLink>
            <NavLink
              to="/empaques-sostenibles"
              onClick={() => setIsSustainabilityOpen(false)}
            >
              Empaques Sostenibles
            </NavLink>
          </SubMenu>
        </DropdownMenu>
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
