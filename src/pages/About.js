import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/nosotros/fondo nosotros.png";
import ColorTab from "../components/colorTab";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const Description = styled.div`
  display: flex;
  position: relative;
  padding: 5% 10%;
  font-size: ${(props) => props.theme.fontSizes.normal};
  color: ${(props) => props.theme.colors.primary};
  max-width: 90vw;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
const BannerImg = styled.img`
  width: 100%;
`;
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.normal};
  padding: 5% 10%;
  p {
    width: 100%;
    max-width: 90vw;
  }
`;
const PilaresSection = styled.div`
  display: flex;
  margin-top: 5%;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  max-width: 90vw;
  color: ${(props) => props.theme.colors.primary};
  padding: 5% 10%;

  span {
    color: ${(props) => props.theme.colors.green};
  }
`;

const PilarContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Pilar = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.yellow};
`;
const About = () => {
  return (
    <AboutContainer>
      <BannerImg src={bannerImage} alt="About Us" />
      <Description>
        <ColorTab />
        <p>
          <b>DISAN Agro</b> como parte del grupo <b>DISAN</b>, nace en{" "}
          <b>2004 </b>
          con el propósito de{" "}
          <b>revolucionar la forma de hacer agricultura sostenible</b>,
          generando desarrollo y crecimiento en Latinoamérica. Somos una
          compañía que promueve el desarrollo de soluciones innovadoras y
          garantiza el suministro de fertilizantes de alta calidad, soportado
          por nuestra fuerza de ventas con alto conocimiento agronómico y
          desarrollos en campo.
        </p>
      </Description>
      <Hero>
        <p>
          Creemos en el agro como pilar de transformación para el desarrollo de
          los países donde tenemos presencia y la sostenibilidad es uno de los
          factores diferenciadores que hacen parte de nuestra ruta estratégica.
        </p>
      </Hero>
      <PilaresSection>
        <ColorTab />
        <h2>
          Nuestros <span>Pilares</span>
        </h2>
        <PilarContainer>
          <Pilar>
            <Icon src={icon} alt="Icon" />
          </Pilar>
          <Pilar></Pilar>
        </PilarContainer>
      </PilaresSection>
    </AboutContainer>
  );
};

export default About;
