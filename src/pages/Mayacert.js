import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Mayacert = () => {
  return (
    <Container>
      <Header>Welcome to Mayacert</Header>
      <SubHeader>Your trusted certification partner</SubHeader>
      <Button>Get Started</Button>
    </Container>
  );
};

export default Mayacert;
