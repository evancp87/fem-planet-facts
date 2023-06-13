// import { useState } from "react";
import "./App.css";
// import PlanetState from "../services/Planets/PlanetsContext";
import Nav from "../src/Components/Nav";
import MobileNav from "../src/Components/MobileNav";
import Planet from "../src/Components/Planet";
import "bulma/css/bulma.min.css";
import PlanetState from "../src/services/Planets/PlanetsContext.jsx";

import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PlanetState>
        <nav>
          <Nav />
          <MobileNav />
        </nav>
        <Planet />
        <Routes>
          <Route path="/planet" element={<Planet />} />
        </Routes>
        <Outlet />
      </PlanetState>
    </>
  );
}

export default App;
