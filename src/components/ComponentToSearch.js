import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
