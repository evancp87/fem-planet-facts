import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import chevron from "../images/icon-chevron.svg";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const Sidebar = ({ setCurrPlanet, colors, planets }) => {
  const [overlay, setOverlay] = useState(false);

  const handleChangePlanet = (planet) => {
    setCurrPlanet(planet);
  };

  console.log("the planets are:", planets, colors);
  return (
    <aside
      className="sidebar is-absolute"
      // className={classnames("sidebar", {
      //   active: props.openSidebar,
      // })}
    >
      <ul className="sidebar-list">
        {planets.map((planet, index) => (
          <li key={index} className="sidebar-item">
            <div className="planet-container">
              <div
                className="planet-icon"
                style={{
                  backgroundColor: colors[planet],
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                }}
              ></div>
              <p onClick={() => handleChangePlanet(planet)}>{planet}</p>
            </div>
            <img
              src={chevron}
              alt="chevron"
              className="chevron has-text-white"
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  openSidebar: PropTypes.bool,
};

export default Sidebar;
