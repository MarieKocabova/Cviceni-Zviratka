import React from "react";

import Animal from "../Animal";

const AnimalList = ({ animalData }) => {
  console.log(animalData.zvirata);
  return (
    <div className="zvirata">
      {animalData.zvirata.map((anim, idx) => {
        return <Animal key={idx} foto={anim.foto} nazev={anim.nazev} nazevLatinsky={anim.nazevLatinsky} idx={idx} />;
      })}
    </div>
  );
};

export default AnimalList;
