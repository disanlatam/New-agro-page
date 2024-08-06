import React from "react";
import bannerNpk from "../assets/banner-npk.jpg";
import banner20anios from "../assets/20 años_Banner WEB.png";
import styled from "styled-components";
import ProductSearch from "../components/ProductSearch";
import map from "../assets/map.png";
import patent from "../assets/Patentkali-8.png";
import fylloton from "../assets/fylloton.png";
import mayacert from "../assets/mayacert-logo.png";
import ButtonLink from "../components/ButtonLink";
import saco from "../assets/sacos-NPK-08.png";
import siembra from "../assets/disan-siembra@2x.png";
import Footer from "../components/Footer";

const Explain = styled.div`
  display: flex;
  width: 100%;
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

const Hero = styled.div`
  display: flex;
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
const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  gap: 5%;
  // width: 100%;
  width: max-content;
`;
const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  box-sizing: border-box;
  img {
    width: auto;
    height: 150px;
  }
  padding: 5% 2%;
  width: 100%;
`;

const Banner = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  img {
    width: 100%;
    height: auto;
  }
`;

const ContenedorExplain = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};

  div:not(.last) {
    position: relative; /* Añadir posición relativa para el contenedor del borde */

    &::after {
      content: "";
      position: absolute;
      top: 30%; /* Ajusta esta propiedad para la altura del borde */
      right: 0;
      width: 1px;
      height: 30%; /* Ajusta esta propiedad para la altura del borde */
      background-color: ${(props) => props.theme.colors.green};
    }
  }

  img {
    width: 100px;
  }

  p {
    font-weight: regular;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Banner>
        <img src={banner20anios} alt="Banner NPK" />
      </Banner>
      <ProductSearch />
      {/* <Products>
        <Hero>
          <img id="mayacert" src={mayacert} alt="Logo Mayacert" />
          <h2>Descubre nuestro portafolio de</h2>
          <h1>AGRICULTURA ORGÁNICA</h1>
          <ButtonLink to="/portafolio">Ver Aquí</ButtonLink>
        </Hero>
        <Images>
          <img src={fylloton} alt="fylloton" />
          <img src={map} alt="fylloton" />
          <img src={patent} alt="fylloton" />
        </Images>
      </Products>
      <Explain>
        <Impulsamos>
          <p>
            <b>Impulsamos iniciativas</b> <br></br>
            <b>sostenibles</b> que generan impacto en
            <b>Latinoamérica</b>
          </p>
          <ButtonLink to="/sostenibilidad" variant="secondary">
            Descúbrelas aquí
          </ButtonLink>
        </Impulsamos>
        <ContenedorExplain>
          <div>
            <img src={siembra} alt="DISAN Siembra" />
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
          <div>
            <img src={saco} alt="Urea NPK" />
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
          <div className="last">
            <img src={saco} alt="Urea NPK" />
            <p>
              <b>DISAN Siembra</b>
              <br></br>Restauración de vida
            </p>
          </div>
        </ContenedorExplain>
      </Explain> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default Home;
