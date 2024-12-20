// src/styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    gap: 0;
  }

  body {
    font-family: Titillium Web, sans-serif;
    text-align: center;
    overflow-x: hidden;
    overflow-y: scroll;

    textarea {
      border: none;
      outline: none;
      background: none;
      resize: none; /* Opcional: desactiva el redimensionamiento si no lo deseas */
      padding: 0;
      margin: 0;
      font: inherit; /* Hereda la fuente del contenedor */
      box-shadow: none; /* Elimina la sombra del cuadro */
    }
  }

  .card-container{
    display: flex;
    gap: 20px;
    max-width: 70vw;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 90vw;
    }
  }

  .top-bar{
   position: relative;
  }
`;

export default GlobalStyle;
