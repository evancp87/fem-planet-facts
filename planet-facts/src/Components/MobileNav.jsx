import React, { useState, useEffect, useContext } from "react";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const MobileNav = () => {
  // const [selectedTab, setSelectedTab] = useState("Overview");

  const {
    setPlanetData,
    colors,
    currPlanet,
    setData,
    selectedTab,
    setSelectedTab,
    handleTabColor,
  } = useContext(PlanetsContext);

  const handleChangeInfo = (tab) => {
    console.log("Helloooo, i ran");
    setSelectedTab(tab);
  };
  useEffect(() => {
    setPlanetData();
  }, [setPlanetData, currPlanet, setData, selectedTab]);

  console.log("The context is:", PlanetsContext);
  return (
    <div className="mobile-nav">
      <div className="mobile-nav__container ">
        <button
          style={handleTabColor(colors, "Overview", currPlanet, "borderBottom")}
          onClick={() => handleChangeInfo("Overview")}
          className={`mobile__nav-container-tab  ${
            selectedTab === "Overview" ? "active" : " "
          }`}
        >
          Overview
        </button>
        <button
          style={handleTabColor(
            colors,
            "Internal Structure",
            currPlanet,
            "borderBottom"
          )}
          onClick={() => handleChangeInfo("Internal Structure")}
          className={` mobile__nav-container-tab  ${
            selectedTab === "Internal Structure" ? "active" : " "
          }`}
        >
          Structure
        </button>
        <button
          style={handleTabColor(
            colors,
            "Surface Geology",
            currPlanet,
            "borderBottom"
          )}
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
