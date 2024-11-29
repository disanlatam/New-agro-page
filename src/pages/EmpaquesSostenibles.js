import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-size: 2em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Section = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
`;

const EmpaquesSostenibles = () => {
  return (
    <Container>
      <Header>Empaques Sostenibles</Header>
      <Main>
        <Section>
          <h2>About Our Sustainable Packaging</h2>
          <p>
            Our sustainable packaging solutions are designed to reduce waste and
            minimize environmental impact. We use eco-friendly materials and
            innovative designs to create packaging that is both functional and
            sustainable.
          </p>
        </Section>
        <Section>
          <h2>Benefits</h2>
          <ul>
            <li>Eco-friendly materials</li>
            <li>Reduced waste</li>
            <li>Innovative designs</li>
            <li>Cost-effective solutions</li>
          </ul>
        </Section>
      </Main>
      <Footer>© 2023 Empaques Sostenibles</Footer>
    </Container>
  );
};

export default EmpaquesSostenibles;
