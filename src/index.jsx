import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => {
  const [animalData, setAnimalData] = useState(null);
  const [animalIdx, setAnimalIdx] = useState(0);

  const fechtAnimal = () => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimalData(data);
      });
  };

  useEffect(() => {
    fechtAnimal();
  }, []);

  const chooseAnimalDetail = (animalIdx) => {
    setAnimalIdx(animalIdx);
    console.log(animalIdx);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {animalData !== null || undefined ? <AnimalList animalData={animalData} onAnimalChange={chooseAnimalDetail} /> : "loading..."}
        {animalData !== null || undefined ? <AnimalDetail animalData={animalData} idx={animalIdx} /> : "loading..."}
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
