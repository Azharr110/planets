import React from "react";
import { data } from "./data";
import sun from "./assets/images/icon-sun.png";

import { MyPlanet } from "./MyPlanet";

export function Planet() {
  return (
    <div className="body">
      <div>
        <a href="# ">
          <img className={`planet sun `} src={sun} alt="nice!"></img>
        </a>
      </div>
      <div className="My_planets">
        {data.map((name) => (
          <MyPlanet name={name} />
        ))}
      </div>{" "}
    </div>
  );
}

export default Planet;
