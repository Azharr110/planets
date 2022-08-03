import React from "react";
import { useState } from "react";

export function MyPlanet({
  title,
  onClick,
  type,
  modal,
  setModal,
  image,
  divClass,
}) {
  console.log(modal, title);
  return (
    <li
      className={type}
      onClick={() => {
        if (title !== modal) setModal(title);
        else setModal(null);
      }}
    >
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
