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
  max-width: 90vw;
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
    border-right: 1px solid ${(props) => props.theme.colors.secondary};
    max-width: 50%;
    padding-right: 5%;
    h3 {
      font-size: ${(props) => props.theme.fontSizes.medium} !important;
      margin-bottom: 2%;
      @media (max-width: 768px) {
        margin-top: 10%;
      }
    }
    h3:not(:first-child) {
      margin-top: 10%;
    }
    @media (max-width: 768px) {
      border-right: none;
      max-width: 100%;
    }
  }
  .rigth {
    padding-left: 5%;
    max-width: 50%;
    h3 {
      font-size: ${(props) => props.theme.fontSizes.medium} !important;
      margin-bottom: 2%;
      @media (max-width: 768px) {
        margin-top: 10%;
      }
    }
    h3:not(:first-child) {
      margin-top: 10%;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  .description {
    font-size: ${(props) => props.theme.fontSizes.small};
    display: flex;
    gap: 20px;
    height: 100%;
    max-height: 40%;
    img {
      width: 150px;
      height: 150px;
      margin-top: 1%;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
              <img src={relacionamiento} alt="Relacionamiento" />
              <p>
                Identificamos y nos comprometemos con los propósitos de nuestros
                clientes y proveedores, generamos y valoramos la confianza,
                promovemos una comunicación efectiva y alineamos estrategias con
                nuestros proveedores para garantizar la sostenibilidad de
                nuestro negocio
              </p>
            </div>
            <h3>ASESORÍA ESPECIALIZADA</h3>
            <div className="description">
              <img src={asesoria} alt="Asesoria" />
              <p>
                Desarrollamos redes de conocimiento con diferentes actores de
                las cadenas agrícolas y agroindustriales que nos permiten
                mantenernos actualizados respecto a las tendencias mundiales de
                mercado, consumo, innovación técnica/tecnológica y normatividad
                para poder ofrecer un acompañamiento integral
              </p>
            </div>
          </div>
          <div className="rigth">
            <h3>SOLUCIONES INTEGRALES PARA EL AGRO</h3>
            <div className="description">
              <img src={soluciones} alt="Soluciones" />
              <p>
                Nos esforzamos por mantener un portafolio de productos
                innovadores, diversos y actualizados que nos permita participar
                en las cadenas productivas, ofreciendo soluciones integrales que
                garanticen la mejor relación costo/beneficio para nuestros
                clientes
              </p>
            </div>
            <h3>SUMINISTRO CONFIABLE</h3>
            <div className="description">
              <img src={suministro} alt="Suministro" />
              <p>
                Garantizamos el cumplimiento de las necesidades de
                aprovisionamiento de nuestros clientes, sin importar su tamaño o
                localización, manteniendo inventarios de producto suficientes, a
                través del trabajo compartido con nuestros proveedores y
                servicios de logística local e internacional
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
