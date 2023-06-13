import React, { useState, useEffect, useContext } from "react";
import sourceIcon from "../images/icon-source.svg";

const PlanetData = ({
  overview,
  structure,
  geology,
  overviewSource,
  structureSource,
  geologySource,
  name,
}) => {
  return (
    <div className="planet-text has-text-white">
      <h1 className="mt-4 is-uppercase heading-one-font">{name}</h1>

      <p className=" mt-2 body-size">{overview}</p>
      <cite className="my-2 is-flex is-justify-content-center source">
        <span className="source-heading">Source:</span>{" "}
        <a href={overviewSource}>Wikipedia</a>
        <img src={sourceIcon} alt="chevron" className="ml-3 " />
        {/* </span> */}
      </cite>
    </div>
  );
};

export default PlanetData;
