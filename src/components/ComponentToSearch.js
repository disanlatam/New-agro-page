import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.green};
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  p {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGreen};
  }
`;

const ButtonComponent = ({ title, letter, onClick }) => {
  return (
    <Button onClick={onClick}>
      <h2>{letter}</h2>
      <p>{title}</p>
    </Button>
  );
};

export default ButtonComponent;
