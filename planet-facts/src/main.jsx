import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/App.css";
import PlanetState from "../src/services/Planets/PlanetsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlanetState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlanetState>
);
