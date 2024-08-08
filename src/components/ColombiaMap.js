import styled from "styled-components";
import React from "react";
import { fondo } from "../assets/tierra textura.jpg";

const MapContainer = styled.div`
  /* Add your custom styles for the map container here */
  background-image: url("${fondo}");
  background-size: cover;
  background-position: center;
`;

const ColombiaMap = () => {
  return <MapContainer>{/* Your map component goes here */}</MapContainer>;
};

export default ColombiaMap;
