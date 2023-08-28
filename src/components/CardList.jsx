import React from "react";
import Card from "./Card";

const CardList = ({ cardList }) => {
  return (
    <div>
      {cardList.map((card) => (
        <Card key={card.id} id={card.id} name={card.name} email={card.email} />
      ))}
    </div>
  );
};

export default CardList;
