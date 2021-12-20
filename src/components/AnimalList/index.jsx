import React from "react";

import Animal from "../Animal";

const AnimalList = ({ animalData, onAnimalChange }) => {
  const handleChange = (idx) => {
    onAnimalChange(idx);
  };
  return (
    <div className="zvirata">
      {animalData.zvirata.map((anim, idx) => {
        return <Animal key={idx} foto={anim.foto} nazev={anim.nazev} nazevLatinsky={anim.nazevLatinsky} idx={idx} onChange={handleChange} />;
      })}
    </div>
  );
};

export default AnimalList;
