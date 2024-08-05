import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px 20px;
`;

const TopLinks = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  a {
    margin-right: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    transition: color 1s, transform 0.3s, font-weight 0.3s;

    &:hover {
      transform: scale(1.1);
      font-weight: bold;
    }
  }
`;
const TopBar = () => {
  return (
    <Container>
      <TopLinks>
        <a href="#">DISAN LATAM</a>
        <a href="#">DISAN Químicos</a>
        <a href="#">Merquiand</a>
        <a href="#">Mangentis®</a>
        <a href="#">INFEREX</a>
        <a href="#">Zona de Pagos</a>
      </TopLinks>
      <SocialLinks />
    </Container>
  );
};

export default TopBar;
