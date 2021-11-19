import React from "react";
import { render } from "react-dom";
import "./style.css";

import AnimalList from "./components/AnimalList";
import AnimalDetail from "./components/AnimalDetail";

const App = () => (
  <>
    <h1>Zvířátka v ZOO</h1>

    <div className="container">
      <AnimalList />
      <AnimalDetail />
    </div>
  </>
);

render(<App />, document.querySelector("#app"));
