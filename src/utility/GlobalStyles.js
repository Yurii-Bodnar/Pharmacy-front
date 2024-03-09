import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
     margin: 0px;
     padding: 20px 20px 40px;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
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
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 6px,
      rgba(255, 255, 255, 0.3) -4px -4px 6px;
  }
  }
`;

export default GlobalStyle;
