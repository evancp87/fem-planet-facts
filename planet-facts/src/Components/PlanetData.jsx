/* eslint react/prop-types: 0 */
import React from "react";
import sourceIcon from "../images/icon-source.svg";

const PlanetData = ({ overview, overviewSource, name }) => {
  //  overview is the default selected info tab and updates when parent rerenders
  return (
    <div className="planet__text ">
      <h1 className="planet__heading-one-font">{name}</h1>

      <p className=" planet__data">{overview}</p>
      <cite className="flex justify-center planet__source">
        <span className="planet__source-heading">Source:</span>{" "}
        <a href={overviewSource}>Wikipedia</a>
        <img src={sourceIcon} alt="chevron" className="chevron " />
        {/* </span> */}
      </cite>
    </div>
  );
};

export default PlanetData;
