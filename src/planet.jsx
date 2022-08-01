import React from "react";
import { Data } from "./data";
import sun from "./assets/images/icon-sun.png";

import { MyPlanet } from "./myplanet";

export function Planet({}) {
  return (
    <div className="body">
      <div>
        <a href="# ">
          <img className={`planet sun `} src={sun} alt="nice!"></img>
        </a>
      </div>
      <div className="My_planets">
        {Data.map((name, id) => (
          <div className={`${name.divClass}`} key={id}>
            <h2> {name.title} </h2>
            <a href="!#">
              <img
                className={`floating planet `}
                src={name.image}
                alt="nice!"
              ></img>
            </a>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default Planet;

/* <li className={type} onClick={onClick}>
  <span className="icn_box_card">
    <img src={image} alt="" />
  </span>
  <span className="new_card_text">{title}</span>
  <span className="new_card_para">{subtitle}</span>
</li>; */
