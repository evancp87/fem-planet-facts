/* eslint react/prop-types: 0 */

import React, { useEffect, useContext } from "react";
import { PlanetsContext } from "../services/Planets/PlanetsContext";
import Hamburger from "../images/icon-hamburger.svg";

const Nav = ({ openSidebar, handleOpenSidebar }) => {
  const { setCurrPlanet, colors, planets, getPlanetNames, setSelectedTab } =
    useContext(PlanetsContext);

  // controls for changing planet on click
  const handleChangePlanet = (planet) => {
    setCurrPlanet(planet);
    setSelectedTab("Overview");
  };

  useEffect(() => {
    getPlanetNames();
  }, [getPlanetNames]);

  // loop over data.json planet names- each planet has an onClick that makes a fetch call to the json data.json for the relevant planet
  return (
    <nav className="nav">
      <div>
        <h1 className="nav__brand ">The Planets</h1>
      </div>
      <ul className="nav__planet-list ">
        <div className="nav__planet-list-container">
          {planets.map((planet, index) => (
            <li
              key={index}
              onClick={() => handleChangePlanet(planet)}
              className="nav__planet-name"
              style={{
                "--default-border": colors[planet],
              }}
            >
              {planet}
            </li>
          ))}
        </div>
      </ul>

      <div
        className={
          openSidebar
            ? "nav__hamburger nav__hamburger-active"
            : " nav__hamburger "
        }
      >
        <img
          src={Hamburger}
          alt="nav__hamburger "
          onClick={handleOpenSidebar}
        />
      </div>
    </nav>
  );
};

export default Nav;
