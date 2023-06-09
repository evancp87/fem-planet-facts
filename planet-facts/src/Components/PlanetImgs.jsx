import React, { useState, useEffect, useContext } from "react";
import mercury from "../images/planet-mercury.svg";
import geology from "../images/geology-mercury.png";
import internal from "../images/planet-mercury-internal.svg";

// default is overview

const PlanetImgs = ({
  selectedTab,
  planetImage,
  planetInternalImage,
  planetGeologyInternal,
}) => {
  let activeImg;

  if (selectedTab === "Internal Structure") {
    activeImg = planetInternalImage;
  } else if (selectedTab === "Overview" || selectedTab === "Surface Geology") {
    activeImg = planetImage;
  }

  return (
    <div className="mt-3 flex-prop planet-img is-relative">
      <img src={activeImg} alt="#" className="is-relative" />

      {selectedTab === "Surface Geology" && (
        <div className="mt-3 flex-prop geology-img is-absolute">
          <img src={planetGeologyInternal} alt="#" className="is-absolute" />
        </div>
      )}
    </div>
  );
};

export default PlanetImgs;
