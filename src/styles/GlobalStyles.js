import { createGlobalStyle } from "styled-components";
import { theme } from "./mainTheme";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.primaryBackground};
    font-family: 'Roboto', sans-serif;
    padding-left: 300px;
  }


`;

export default GlobalStyle;
