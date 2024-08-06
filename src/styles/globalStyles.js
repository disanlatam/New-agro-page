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
  }
  
`;

export default GlobalStyle;
