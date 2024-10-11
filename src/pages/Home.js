import React from "react";
import bannerNpk from "../assets/banner-npk.jpg";
import fondoCampo from "../assets/fondo campo.jpg";
import banner20anios from "../assets/20 años_Banner WEB.png";
import styled from "styled-components";
import ProductSearch from "../components/ProductSearchBar";
import ImageCarousel from "../components/imageCarousel";
import mayacert from "../assets/mayacert-logo.png";
import ButtonLink from "../components/ButtonLink";
import saco from "../assets/sacos-NPK-08.png";
import siembra from "../assets/disan-siembra@2x.png";
import pacto from "../assets/Logo_Pacto_Global_UN.png";
import ColombiaMap from "../components/ColombiaMap";
import ConctactForm from "../components/ContactCard";
import Footer from "../components/Footer";
import AlliesSwiper from "../components/alliesCards";

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Impulsamos = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  padding: 5% 2%;
  a {
    margin-top: 5%;
  }
`;
const ContenedorExplain = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding-bottom: 5%;
  color: ${(props) => props.theme.colors.primary};

  .containerImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    img {
      width: 100px;
    }

    p {
      font-weight: regular;
    }
  }

  div:not(.last):not(.containerImg) {
    position: relative; /* Añadir posición relativa para el contenedor del borde */

    &::after {
      content: "";
      position: absolute;
      top: 30%; /* Ajusta esta propiedad para la altura del borde */
      right: 0;
      width: 1px;
      height: 50px; /* Ajusta esta propiedad para la altura del borde */
      background-color: ${(props) => props.theme.colors.green};
    }
    @media (max-width: 480px) {
      &::after {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Hero = styled.div`
  display: flex;
  // flex: 1;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  #mayacert {
    width: 100px;
    height: auto;
  }
  h1 {
    color: ${(props) => props.theme.colors.green};
  }
  a {
    margin-top: 5%;
  }
`;
const Slides = styled.div`
  width: 100%;
  max-width: 50%;
  @media (min-width: 768px) {
    max-width: 300px;
  }
`;
const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  box-sizing: border-box;
  padding: 5% 2%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;
const Banner = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  img {
    width: 100%;
    height: auto;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BackgroundContainer = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.2)
    ),
    url("${fondoCampo}");
  background-size: cover;
  background-position: top;
  width: 100%;
  height: fit-content; // Adjust the height as needed
  display: flex;
  flex-direction: column;
  padding: 5% 2%;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    min-height: 350px;
    font-size: 1.5rem;
    background-position: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 5%;
  align-items: CE;
  color: ${(props) => props.theme.colors.white};
  // padding: 5% 2%;
  h2 {
    font-size: 3rem;
  }
`;
const ExtraInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  padding: 5% 2%;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  @media (min-width: 480px) {
    flex-direction: row;
    padding: 0;
  }
`;
const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 10px;
    // gap: 5%;
  }
`;

const Allies = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 5% 2%;
`;

const Home = () => {
  return (
    <Container>
      <Banner>
        <img src={banner20anios} alt="Banner NPK" />
      </Banner>

      <ProductSearch />

      <Products>
        <Hero>
          <img id="mayacert" src={mayacert} alt="Logo Mayacert" />
          <h2>Descubre nuestro portafolio de</h2>
          <h1>AGRICULTURA ORGÁNICA</h1>
          <ButtonLink to="/product-search">Ver Aquí</ButtonLink>
        </Hero>
        <Slides>
          <ImageCarousel />
        </Slides>
      </Products>

      <Explain>
        <Impulsamos>
          <p>
            <b>Impulsamos iniciativas</b> <br></br>
            <b>sostenibles</b> que generan impacto en
            <b> Latinoamérica</b>
          </p>
          <ButtonLink to="/sostenibilidad" variant="secondary">
            Descúbrelas aquí
          </ButtonLink>
        </Impulsamos>
        <ContenedorExplain>
          <div>
            <div className="containerImg">
              <img src={siembra} alt="DISAN Siembra" />
            </div>
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
          <div>
            <div className="containerImg">
              <img src={saco} alt="DISAN Siembra" />
            </div>
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
          <div className="last">
            <div className="containerImg">
              <img src={pacto} alt="DISAN Siembra" />
            </div>
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
        </ContenedorExplain>
      </Explain>

      <BackgroundContainer>
        <Content>
          <h2>+20</h2>
          <p>Proveedores</p>
        </Content>
        <Content>
          <h2>+100</h2>
          <p>Productos en el portafolio</p>
        </Content>
        <Content>
          <h2>+650</h2>
          <p>Clientes Activos</p>
        </Content>
      </BackgroundContainer>

      <ExtraInfo>
        <ExtraContent>
          <h2>6</h2>
          <p>Países</p>
        </ExtraContent>
        <ExtraContent>
          <h2>55</h2>
          <p>Agrónomos</p>
        </ExtraContent>
        <ExtraContent>
          <h2>40</h2>
          <p>Regiones de cobertura</p>
        </ExtraContent>
      </ExtraInfo>

      <ColombiaMap />

      <ConctactForm />

      <Allies>
        <AlliesSwiper />
      </Allies>
    </Container>
  );
};

export default Home;
