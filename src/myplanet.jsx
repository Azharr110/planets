import React from "react";

export function MyPlanet({ name }) {
  return (
    <div className={`${name.divClass}`}>
      <h2> {name.title} </h2>
      <a href="!#">
        <img className={`floating planet `} src={name.image} alt="nice!"></img>
      </a>
    </div>
  );
}

export default MyPlanet;
