import { useState } from "react";
import "./styles/App.css";

// import PlanetState from "../services/Planets/PlanetsContext";
import Nav from "../src/Components/Nav";
import MobileNav from "../src/Components/MobileNav";
import Planet from "../src/Components/Planet";
// import Background from "../../images//background-stars.svg";
import PlanetState from "../src/services/Planets/PlanetsContext.jsx";

import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <PlanetState>
        <Nav handleOpenSidebar={handleOpenSidebar} />
        <MobileNav />

        <Planet openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Routes>
          <Route path="/planet" element={<Planet />} />
        </Routes>
        <Outlet />
      </PlanetState>
    </>
  );
}

export default App;
