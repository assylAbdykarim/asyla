import React from "react";
import "./cards.css";

const Card = ({ card }) => {
  return (
    <div className="card" id={card.id}>
      <img src={card.img} alt="" />
      <p>{card.price}</p>
      <p>{card.text}</p>
    </div>
  );
};

export default Card;
