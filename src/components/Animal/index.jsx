import React from "react";
import "./style.css";

const Animal = () => {
  return (
    <div className="zvire">
          <div className="zvire__foto">
            <img src="./assets/slon.jpg" alt="slon" />
          </div>
          <div className="zvire__popis">
            <div className="zvire__nazev">Slon africký</div>
            <div className="zvire__latinsky">Slonus Africanus</div>
          </div>
        </div>
  );
};

export default Animal;