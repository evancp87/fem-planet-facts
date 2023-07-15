import React, { useState, useEffect, useContext, Dispatch } from "react";
// import PlanetState from "../services/Planets/PlanetsContext";
import { PlanetsContext } from "../services/Planets/PlanetsContext";
import Planet from "./Planet";
import Hamburger from "../images/icon-hamburger.svg";
const Nav = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const { setCurrPlanet, colors, planets, getPlanetNames } =
    useContext(PlanetsContext);

  console.log(
    "Tghe planets are:",
    planets.map((planet) => planet)
  );
  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
    setOverlay(!overlay);
  };

  const handleCloseSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(false);
    setOverlay(false);
  };

  const handleChangePlanet = (planet) => {
    console.log("i fired");
    setCurrPlanet(planet);
  };

  useEffect(() => {
    getPlanetNames();
  }, [getPlanetNames]);

  // loop over data.json planet names- each planet has an onClick that makes a fetch call to the json data.json for the relevant planet
  return (
    <nav className="nav-background">
      <div>
        <h1 className="navbar-brand logo">The Planets</h1>
      </div>
      <ul className="planet-list flex">
        <div className="nav-planet-list">
          {planets.map((planet, index) => (
            <li
              key={index}
              onClick={() => handleChangePlanet(planet)}
              className="nav__planet-name"
              style={{
                borderTop: `solid 2px transparent`,
                ":hover": { borderTop: `solid 2px ${colors[planet.name]}` },
              }}
            >
              {planet}
            </li>
          ))}
        </div>
      </ul>

      <div className="nav__hamburger">
        <img src={Hamburger} alt="hamburger menu" onClick={handleOpenSidebar} />
      </div>
    </nav>
  );
};

export default Nav;
