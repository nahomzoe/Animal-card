import React from "react";
import PropTypes from "prop-types";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt="" />
      <h2>{props.name}</h2>
      <div className="imgNumButton">
        <div className="imgNum">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt=""
          />
          <span>{props.like}</span>
        </div>

        <button>Add like</button>
      </div>
    </div>
  );
};

export default AnimalCard;
