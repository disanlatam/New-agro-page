import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* Estilos para el contenedor de la tarjeta */
`;

const CardImage = styled.img`
  /* Estilos para la imagen del aliado */
`;

const CardTitle = styled.h3`
  /* Estilos para el título del aliado */
`;

const AlliesCard = ({ ally }) => {
  return (
    <CardContainer>
      <CardImage src={ally.image} alt={ally.name} />
      <CardTitle>{ally.name}</CardTitle>
    </CardContainer>
  );
};

export default AlliesCard;
