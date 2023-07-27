import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-cyan-400 inline-block rounded-lg p-4 m-2 hover:scale-105 drop-shadow-lg border-[.25rem] border-cyan-600 text-center">
      <img
        className="mx-auto"
        src={
          "https://robohash.org/" +
          (id ?? "digiface") +
          "?set=set2&size=200x200"
        }
        alt="digiface"
      />
      <div>
        <h2 className="text-l font-bold">{name ?? "Your Name"}</h2>
        <p>{email ?? "some.email@digibook.com"}</p>
      </div>
    </div>
  );
};

export default Card;
