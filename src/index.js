import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./utility/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="/Pharmacy-front">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
