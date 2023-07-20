/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import chevron from "../images/icon-chevron.svg";

const Sidebar = ({
  setCurrPlanet,
  colors,
  planets,
  openSidebar,
  setOpenSidebar,
}) => {
  // handles changing the planet from the sidebar
  const handleChangePlanet = (planet) => {
    setCurrPlanet(planet);
    setOpenSidebar(false);
  };

  console.log("the planets are:", planets, colors);
  return (
    <aside
      className={openSidebar ? "sidebar active-sidebar" : "sidebar absolute"}
    >
      <ul className="sidebar__list">
        {planets.map((planet, index) => (
          <li key={index} className="sidebar__item">
            <div className="sidebar__planet-container">
              <div
                className="sidebar__planet-icon"
                style={{
                  backgroundColor: colors[planet],
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                }}
              ></div>
              <p onClick={() => handleChangePlanet(planet)}>{planet}</p>
            </div>
            <img src={chevron} alt="chevron" className="chevron" />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
