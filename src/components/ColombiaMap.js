import styled from "styled-components";
import React from "react";
import fondo from "../assets/tierra textura.jpg";
import mapa from "../assets/mapa.png";

const MapContainer = styled.div`
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.2)
    ),
    url("${fondo}");
  background-size: cover;
  background-position: center;
  height: fit-content;
  width: 90%;
  margin: 5%;
  color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h2 {
    justify-self: flex-end;
  }
  padding: 5% 2%;

  img {
    max-width: 90%;
    height: auto;
    align-self: center;
  }

  @media (min-width: 768px) {
    max-height: 90vh;
    img {
      max-width: 60vw;
      height: 60vh;
      max-height: 1080px;
    }
  }
`;

const ColombiaMap = () => {
  return (
    <MapContainer>
      <h2>CONOCE DONDE ESTAMOS</h2>
      <img src={mapa} alt="Mapa de colombia" />
      <p>
        <b>Revolucionamos</b> la forma de hacer <b>agricultura sostenible</b>,
        generando <b>desarrollo</b> y <b>crecimiento</b>.
      </p>
    </MapContainer>
  );
};

export default ColombiaMap;
