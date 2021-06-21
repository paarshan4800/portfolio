import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  primary: "#4070f4",
  secondary: "#0e2431",
  bg: "#ffffff",
};

export const darkTheme = {
  primary: "#4070f4",
  secondary: "#0e2431",
  bg: "#121212",
};

export const GlobalStyles = createGlobalStyle`
    
    body {
        background-color : ${(props) => props.theme.bg};
        transition: all 0.25s linear;
    }

`;

// --primary: #4070f4;
// --secondary: #0e2431;
// --white: #ffffff;
