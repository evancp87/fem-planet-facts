import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const PlanetsContext = createContext();

export const PlanetState = (props) => {
  const { children } = props;
  const [data, setData] = useState({});
  const [planets, setPlanets] = useState([]);
  const [currPlanet, setCurrPlanet] = useState("Mercury");
  const [selectedTab, setSelectedTab] = useState("Overview");

  // colors of planets to use dynamically in app
  const colors = {
    Mercury: "#DEF4FC",
    Venus: "#F7CC7F",
    Earth: "#545BFE",
    Mars: "#FF6A45",
    Jupiter: "#ECAD7A",
    Uranus: "#65F0D5",
    Saturn: "#FCCB6B",
    Neptune: "#497EFA",
  };

  // gets names of planets
  const getPlanetNames = useCallback(async () => {
    const { data } = await axios.get(
      "planet-facts/public/data.json"
    );
    console.log(data);

    const planetNames = data.map((planet) => planet.name);
    setPlanets(planetNames);
  }, []);

  // handles dynamic tab colors on desktop and mobile tabs
  const handleTabColor = (obj, tab, planet, property) => {
    if (selectedTab === tab) {
      return {
        [property]: obj[planet],
      };
    }
    return {};
  };

  // gets api data and filters based on currentPlanet selection
  const setPlanetData = useCallback(async () => {
    const { data } = await axios.get("src/data.json");
    return data.filter((planet) => {
      const {
        name,
        overview: { content: overviewContent, source: overviewSource },
        structure: { content: structureContent, source: structureSource },
        geology: { content: geologyContent, source: geologySource },
        rotation,
        revolution,
        radius,
        temperature,
        images: {
          planet: planetImage,
          internal: planetInternalImage,
          geology: planetGeologyInternal,
        },
      } = planet;
      if (name === currPlanet) {
        setData({
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
        });
      }
    });
  }, [currPlanet]);

  return (
    <PlanetsContext.Provider
      value={{
        data,
        setData,
        currPlanet,
        setCurrPlanet,
        planets,
        setPlanets,
        colors,
        getPlanetNames,
        setPlanetData,
        selectedTab,
        setSelectedTab,
        handleTabColor,
        // handleMobileTabColor,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetState;
