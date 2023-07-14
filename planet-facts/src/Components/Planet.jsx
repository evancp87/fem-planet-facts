import React, { useState, useEffect, useContext } from "react";
import PlanetData from "./PlanetData";
import PlanetImgs from "./PlanetImgs";
import FooterData from "./FooterData";
import Sidebar from "./Sidebar";
import { PlanetsContext } from "../services/Planets/PlanetsContext";
import classnames from "classnames";

const Planet = (props) => {
  // onLoad loads default state- mercury as the default planet & the overview as the default data
  const {
    setPlanetData,
    data,
    planets,
    setCurrPlanet,
    colors,
    currPlanet,
    setData,
    getPlanetNames,
  } = useContext(PlanetsContext);
  console.log(setPlanetData);
  const [selectedTab, setSelectedTab] = useState("Overview");

  // data should live here and be passed to planetImgs, PlanetData and FooterData components as props
  useEffect(() => {
    setPlanetData();
  }, [setPlanetData, currPlanet, setData, selectedTab]);

  const {
    name,
    overviewContent,
    overviewSource,
    structureContent,
    structureSource,
    geologyContent,
    geologySource,
    rotation,
    revolution,
    radius,
    temperature,
    planetImage,
    planetInternalImage,
    planetGeologyInternal,
  } = data;

  console.log(
    "The props are:",
    name,
    overviewContent,
    overviewSource,
    structureContent,
    structureSource,
    geologyContent,
    geologySource,
    rotation,
    revolution,
    radius,
    temperature,
    planetImage,
    planetInternalImage,
    planetGeologyInternal
  );

  const handleChangeInfo = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <main className="grid">
        <Sidebar
          setCurrPlanet={setCurrPlanet}
          planets={planets}
          colors={colors}
        />
        <PlanetImgs
          selectedTab={selectedTab}
          planetImage={planetImage}
          planetInternalImage={planetInternalImage}
          planetGeologyInternal={planetGeologyInternal}
        />
        <div className="planet-text-container mobile-widths-planet-data">
          <PlanetData
            name={name}
            overview={overviewContent}
            geology={geologyContent}
            structure={structureContent}
            geologySource={geologySource}
            structureSource={structureSource}
            overviewSource={overviewSource}
            selectedTab={selectedTab}
          />
          <div className="  is-fullwidth desktop-options">
            <button
              onClick={() => handleChangeInfo("Overview")}
              className={`is-clickable no-bg mx-2 mt-2  border-full ${
                selectedTab === "Overview" ? "active" : " "
              }`}
            >
              01 <span className="tab-value">Overview</span>{" "}
            </button>
            <button
              onClick={() => handleChangeInfo("Internal Structure")}
              className={`is-clickable no-bg mx-2 mt-2  border-full ${
                selectedTab === "Internal Structure" ? "active" : " "
              }`}
            >
              02 <span className="tab-value">Internal Structure</span>
            </button>
            <button
              onClick={() => handleChangeInfo("Surface Geology")}
              className={`is-clickable no-bg mx-2 mt-2  border-full ${
                selectedTab === "Surface Geology" ? "active" : " "
              }`}
            >
              03 <span className="tab-value">Surface Geology</span>{" "}
            </button>
          </div>
        </div>

        {/* each has onClick function to fetch selected data */}
      </main>
      <FooterData
        rotation={rotation}
        temperature={temperature}
        revolution={revolution}
        radius={radius}
      />
    </>
  );
};

export default Planet;
