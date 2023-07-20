/* eslint react/prop-types: 0 */
import React, { useEffect, useContext } from "react";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const MobileNav = () => {
  const {
    setPlanetData,
    colors,
    currPlanet,
    setData,
    selectedTab,
    setSelectedTab,
    handleTabColor,
    // handleMobileTabColor,
  } = useContext(PlanetsContext);

  // sets selected tab
  const handleChangeInfo = (tab) => {
    setSelectedTab(tab);
  };

  // listens for changes to current planet, selected tab
  useEffect(() => {
    setPlanetData();
  }, [setPlanetData, currPlanet, setData, selectedTab]);

  console.log("The context is:", PlanetsContext);
  return (
    <div className="mobile-nav">
      <div className="mobile-nav__container ">
        <button
          style={handleTabColor(
            colors,
            "Overview",
            currPlanet,
            "borderColor"
            // "backgroundColor"
          )}
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
            "Overview",
            currPlanet,
            "borderColor"
            // "backgroundColor"
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
            "Overview",
            currPlanet,
            "borderColor"
            // "backgroundColor"
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
