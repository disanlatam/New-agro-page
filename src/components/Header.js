import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

const HeaderWrapper = styled.header`
  color: ${(props) => props.theme.colors.primary};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <NavBar />
    </HeaderWrapper>
  );
};

export default Header;
