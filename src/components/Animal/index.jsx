import React from "react";
import "./style.css";

const Animal = ({ idx, nazev, foto, nazevLatinsky }) => {
  const handleClick = () => {
    console.log(idx);
  };

  return (
    <div className="zvire" onClick={handleClick}>
      <div className="zvire__foto">
        <img src={foto} alt={nazev} />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{nazev}</div>
        <div className="zvire__latinsky">{nazevLatinsky}</div>
      </div>
    </div>
  );
};

export default Animal;
