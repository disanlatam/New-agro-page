import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/nosotros/fondo nosotros.png";
import ColorTab from "../components/colorTab";
import seedIcon from "../assets/nosotros/Icon seed.png";
import seedsIcon from "../assets/nosotros/icons seeds.png";
import relacionamiento from "../assets/nosotros/relacionamiento.png";
import soluciones from "../assets/nosotros/soluciones.png";
import asesoria from "../assets/nosotros/asesoria.png";
import suministro from "../assets/nosotros/suministro.png";
import Footer from "../components/Footer";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  font-size: ${(props) => props.theme.fontSizes.normal};
`;
const Description = styled.div`
  display: flex;
  position: relative;
  padding: 5% 10%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};

  width: 100%;
  text-align: center;
  p {
    max-width: 70vw;
    width: 100%;
    text-align: center;
    @media (min-width: 768px) {
      max-width: 50vw;
    }
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
`;
const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;
const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.normal};
  padding: 5% 10%;
  p {
    width: 100%;
    max-width: 70vw;
    @media (min-width: 768px) {
      max-width: 50vw;
    }
  }
`;
const PilaresSection = styled.div`
  display: flex;
  margin-top: 5%;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  max-width: fit-content;
  color: ${(props) => props.theme.colors.primary};
  padding: 5% 10%;
  margin-bottom: 5%;
  span {
    color: ${(props) => props.theme.colors.green};
  }

  h2 {
    margin-bottom: 5%;
  }
  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;
const PilarContainer = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Pilar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 5px;
  .icon-container {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description {
    background-color: ${(props) => props.theme.colors.yellow};
    color: white;
    border-radius: 20px;
    padding: 5% 10%;
  }

  h3 {
    text-align: center;
  }
`;
const Icon = styled.img`
  width: 100%;
  height: auto;
  max-width: 100px;
`;
const PromesasSection = styled.div`
  display: flex;
  text-align: left;
  .left {
  }
  .description {
    display: flex;
    img {
      width: 100px;
      max-width: 100px;
      height: auto;
    }
  }
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
            <div className="icon-container">
              <Icon src={seedIcon} alt="Icon" />
            </div>
            <h3>Mitigación de impactos ambientales</h3>
            <div className="description">
              <ul>
                <li>Salud del suelo</li>
                <li>Disan Siembra</li>
                <li>Balance de materiales</li>
              </ul>
            </div>
          </Pilar>
          <Pilar>
            <div className="icon-container">
              <Icon src={seedsIcon} alt="Icon" />
            </div>
            <h3>Productividad Agricultura Sostenible </h3>
            <div className="description">
              <ul>
                <li>Productividad agrícola</li>
                <li>Economía agrícola</li>
                <li>Banco de alimentos </li>
              </ul>
            </div>
          </Pilar>
        </PilarContainer>
      </PilaresSection>
      <PilaresSection>
        <ColorTab />
        <h2>
          Nuestras <span>Promesas</span>
        </h2>
        <PromesasSection>
          <div className="left">
            <h3>RELACIONAMIENTO DE LARGO PLAZO</h3>
            <div className="description">
              <img src={relacionamiento} alt="" srcset="" />
              <p>
                Identificamos y nos comprometemos con los propósitos de nuestros
                clientes y proveedores, generamos y valoramos la confianza,
                promovemos una comunicación efectiva y alineamos estrategias con
                nuestros proveedores para garantizar la sostenibilidad de
                nuestro negocio
              </p>
            </div>
          </div>
        </PromesasSection>
      </PilaresSection>
      <Footer />
    </AboutContainer>
  );
};

export default About;
