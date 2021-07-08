import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bg: "#ffffff",
  text: "#000000",
  backgroundText: "#DADCE0",
};

export const darkTheme = {
  bg: "#090C10",
  text: "#ffffff",
  backgroundText: "#DADCE0",
};

export const GlobalStyles = createGlobalStyle`

    :root {
      --primary: #9d4edd;
      --secondary: #1668B2;
      --text : ${(props) => props.theme.text};
      --backgroundText : ${(props) => props.theme.backgroundText};
      --bg : ${(props) => props.theme.bg};
    }
    
    body {
        background-color : ${(props) => props.theme.bg};
        transition: all 0.25s linear;
    }

`;
