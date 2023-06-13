import React, { useState, useEffect, useContext } from "react";
import { PlanetsContext } from "../services/Planets/PlanetsContext";

const MobileNav = (props) => {
  const handleChangeInfo = () => {
    setData(currPlanet);
  };

  const { data, currPlanet, setData } = useContext(PlanetsContext);
  console.log("The context is:", PlanetsContext);
  return (
    <div className="mobile-nav">
      <div className="is-flex is-flex-direction-row is-flex is-align-items-center  is-justify-content-space-between py-4 mx-3 is-fullwidth">
        <button
          onClick={() => handleChangeInfo}
          className="is-clickable no-border tab-btns  mx-2 is-uppercase"
        >
          Overview
        </button>
        <button
          onClick={() => handleChangeInfo}
          className="is-clickable no-border mx-2 tab-btns  is-uppercase"
        >
          Structure
        </button>
        <button
          onClick={() => handleChangeInfo}
          className="is-clickable no-border  mx-2 tab-btns is-uppercase"
        >
          Geology
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
