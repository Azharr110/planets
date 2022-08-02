import React from "react";

export function MyPlanet({ title, onClick, type, image, divClass }) {
  return (
    <li className={type} onClick={onClick}>
      <div className={divClass}>
        <h2> {title} </h2>
        <a href="!#">
          <img className={`floating planet `} src={image} alt="nice!"></img>
        </a>
      </div>
    </li>
  );
}

export default MyPlanet;
