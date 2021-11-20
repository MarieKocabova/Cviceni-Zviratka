import React from "react";
import "./style.css";

const AnimalDetail = ({ animalData, idx }) => {
  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img className="detail__foto" src={animalData.zvirata[idx].foto} alt={animalData.zvirata[idx].nazev} />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{animalData.zvirata[idx].nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{animalData.zvirata[idx].nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis">{animalData.zvirata[idx].popis}</p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p>{animalData.zvirata[idx].domovina}</p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{animalData.zvirata[idx].biotop}</p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p>{animalData.zvirata[idx].potrava}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{animalData.zvirata[idx].velikost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
