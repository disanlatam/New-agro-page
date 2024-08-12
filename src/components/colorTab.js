import styled from "styled-components";

// Componente para la pestaña horizontal
const ColorTab = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "5px"};
  background-color: ${(props) =>
    props.theme.colors[props.color] ||
    props.theme.colors.green}; /* Usa el color del tema basado en el nombre */
  border-radius: 2px; /* Opcional: esquinas redondeadas */
`;

export default ColorTab;
