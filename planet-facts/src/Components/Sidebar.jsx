import React, { useState, useEffect, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import chevron from "../images/icon-chevron.svg";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const Sidebar = ({
  setCurrPlanet,
  colors,
  planets,
  openSidebar,
  setOpenSidebar,
}) => {
  const [overlay, setOverlay] = useState(false);

  const handleChangePlanet = (planet) => {
    setCurrPlanet(planet);
    setOpenSidebar(false);
  };
  // const sidebarRef =useRef(null)

  console.log("the planets are:", planets, colors);
  return (
    <aside
      className={openSidebar ? "sidebar activeSidebar" : "sidebar absolute"}
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
            <img src={chevron} alt="chevron" className="chevron" />
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
