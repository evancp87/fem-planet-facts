import React, { useState, useEffect, useContext } from "react";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const MobileNav = (props) => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const handleChangeInfo = () => {
    setData(currPlanet);
  };

  const { data, currPlanet, setData } = useContext(PlanetsContext);
  console.log("The context is:", PlanetsContext);
  return (
    <div className="mobile-nav">
      <div className="mobile-nav__container ">
        <button
          onClick={() => handleChangeInfo("Overview")}
          className={`mobile__nav-container-tab  ${
            selectedTab === "Overview" ? "active" : " "
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => handleChangeInfo("Internal Structure")}
          className={` mobile__nav-container-tab  ${
            selectedTab === "Internal Structure" ? "active" : " "
          }`}
        >
          Structure
        </button>
        <button
          onClick={() => handleChangeInfo("Surface Geology")}
          className={` mobile__nav-container-tab ${
            selectedTab === "Surface Geology" ? "active" : " "
          }`}
        >
          Geology
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
