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
    <div className="planet-text text-slate-100">
      <h1 className="mt-4 uppercase heading-one-font">{name}</h1>

      <p className=" mt-2 body-size">{overview}</p>
      <cite className="my-2 flex justify-center source">
        <span className="source-heading">Source:</span>{" "}
        <a href={overviewSource}>Wikipedia</a>
        <img src={sourceIcon} alt="chevron" className="chevron " />
        {/* </span> */}
      </cite>
    </div>
  );
};

export default PlanetData;
