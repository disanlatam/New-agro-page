import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Define estilos base para el botón
const buttonStyles = {
  default: `
    background-color: #327541;
    color: #fff;
    &:hover {
      background-color: #D7A445;
      color: white;
      box-shadow: 0 0 5px #D7A445;
    }
  `,
  secondary: `
    background-color: white;
    color: #327541;
    &:hover {
      background-color: #D7A445;
      color: white;
      box-shadow: 0 0 5px #D7A445;
    }
  `,
};

const Button = styled(Link)`
  display: flex;
  padding: 10px 30%;
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s;
  ${(props) => buttonStyles[props.variant] || buttonStyles.default}
`;

const ButtonLink = ({ to, variant = "default", children }) => {
  return (
    <Button to={to} variant={variant}>
      {children}
    </Button>
  );
};

export default ButtonLink;
