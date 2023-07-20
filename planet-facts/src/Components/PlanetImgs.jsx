/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// default is overview

const PlanetImgs = ({
  selectedTab,
  planetImage,
  planetInternalImage,
  planetGeologyInternal,
  currPlanet,
}) => {
  // handles key for motion framer animation

  const [animationKey, setAnimationKey] = useState(0);
  let activeImg;

  // handles absolute positioned geology image, i.e two images
  if (selectedTab === "Internal Structure") {
    activeImg = planetInternalImage;
  } else if (selectedTab === "Overview" || selectedTab === "Surface Geology") {
    activeImg = planetImage;
  }

  // Update the animationKey whenever selectedTab changes
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currPlanet]);

  return (
    <motion.div
      key={animationKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: "5vh" }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="planet__img-container "
    >
      <img src={activeImg} alt="#" className="planet-img" />

      {selectedTab === "Surface Geology" && (
        <div className="planet__geology-img ">
          <img src={planetGeologyInternal} alt="#" />
        </div>
      )}
    </motion.div>
  );
};

export default PlanetImgs;
