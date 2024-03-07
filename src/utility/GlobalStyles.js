import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
     margin: 0px;
     padding: 0px;
    box-sizing: border-box;
    font-family:  sans-serif;
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: 0px;
     margin: 0px;
  cursor: default;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
