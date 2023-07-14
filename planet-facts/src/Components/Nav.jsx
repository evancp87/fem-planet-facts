import React, { useState, useEffect, useContext, Dispatch } from "react";
// import PlanetState from "../services/Planets/PlanetsContext";
import { PlanetsContext } from "../services/Planets/PlanetsContext";
import Planet from "./Planet";

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
  const handleOpenSidebar = (e) => {
    e.stopPropagation();
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
    <nav className="container is-fullhd is-flex bulma-responsive is-justify-content-space-between  border py-4  nav-background">
      <div>
        <h1 className="navbar-brand is-align-self-center pl-3 pt-2 is-size-4 has-text-white is-uppercase logo">
          The Planets
        </h1>
      </div>
      <ul className="planet-list is-flex">
        {planets.map((planet, index) => (
          <li
            key={index}
            onClick={() => handleChangePlanet(planet)}
            className="mx-4 is-clickable"
            style={{
              borderTop: `solid 2px transparent`,
              ":hover": { borderTop: `solid 2px ${colors[planet.name]}` },
            }}
          >
            {planet}
          </li>
        ))}
      </ul>

      <a
        role="button"
        className="navbar-burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  );
};

export default Nav;
