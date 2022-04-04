import React, { Component } from "react";
import PropTypes from "prop-types";

const AnimalCard = (props) => {
  // const animal = props.animal;
  // const addLikeOnClick = props.addLikeOnClick;
  const { animal, addLikeOnClick, remove } = props;
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/2000x1000/?${props.name}`}
        alt=""
      />
      <button className="removeButton" onClick={() => remove(animal)}>
        X
      </button>
      <h2>{props.name}</h2>
      <div className="imgNumButton">
        <div className="imgNum">
          <img
            className="heart"
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt=""
          />
          <span>{props.like}</span>
        </div>

        <button
          className="addLikeButton"
          onClick={() => addLikeOnClick(animal)}
        >
          Add like
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
