/* eslint react/prop-types: 0 */
import React, { useEffect, useContext } from "react";
import PlanetData from "./PlanetData";
import PlanetImgs from "./PlanetImgs";
import FooterData from "./FooterData";
import Sidebar from "./Sidebar";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const Planet = ({ openSidebar, setOpenSidebar }) => {
  // onLoad loads default state- mercury as the default planet & the overview as the default data
  const {
    setPlanetData,
    data,
    planets,
    setCurrPlanet,
    colors,
    currPlanet,
    setData,
    selectedTab,
    setSelectedTab,
    handleTabColor,
  } = useContext(PlanetsContext);
  console.log(setPlanetData);

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

  // changes selected tab
  const handleChangeInfo = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <main className="planet">
        <Sidebar
          setCurrPlanet={setCurrPlanet}
          planets={planets}
          colors={colors}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <PlanetImgs
          currPlanet={currPlanet}
          selectedTab={selectedTab}
          planetImage={planetImage}
          planetInternalImage={planetInternalImage}
          planetGeologyInternal={planetGeologyInternal}
        />
        <div className="planet__text-container --planet__mobile">
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
          {/* tabs */}
          <div className="planet__tabs">
            <button
              onClick={() => handleChangeInfo("Overview")}
              style={handleTabColor(
                colors,
                "Overview",
                currPlanet,
                "backgroundColor"
              )}
              className={` planet__tab-number  ${
                selectedTab === "Overview" ? "active" : " "
              }`}
            >
              01 <span className="planet__tab-value">Overview</span>{" "}
            </button>
            <button
              onClick={() => handleChangeInfo("Internal Structure")}
              style={handleTabColor(
                colors,
                "Internal Structure",
                currPlanet,
                "backgroundColor"
              )}
              className={` planet__tab-number  ${
                selectedTab === "Internal Structure" ? "active" : " "
              }`}
            >
              02 <span className="planet__tab-value">Internal Structure</span>
            </button>
            <button
              style={handleTabColor(
                colors,
                "Surface Geology",
                currPlanet,
                "backgroundColor"
              )}
              onClick={() => handleChangeInfo("Surface Geology")}
              className={` planet__tab-number ${
                selectedTab === "Surface Geology" ? "active" : " "
              }`}
            >
              03 <span className="planet__tab-value">Surface Geology</span>{" "}
            </button>
          </div>
        </div>
        <FooterData
          rotation={rotation}
          temperature={temperature}
          revolution={revolution}
          radius={radius}
        />
        {/* each has onClick function to fetch selected data */}
      </main>
    </>
  );
};

export default Planet;
