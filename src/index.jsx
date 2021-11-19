import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => {
  const [animalData, setAnimalData] = useState(null);

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

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {animalData !== null || undefined ? <AnimalList animalData={animalData} /> : "loading..."}
        {animalData !== null || undefined ? <AnimalDetail animalData={animalData} /> : "loading..."}
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
