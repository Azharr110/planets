import React, { useState } from "react";
import { data } from "./data";
import sun from "./assets/images/icon-sun.png";
import mercury from "./assets/images/icon-mercury.png";

import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { MyPlanet } from "./MyPlanet";

export function Planet() {
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div className="body">
      <div>
        <a href="# ">
          <img className={`planet sun `} src={sun} alt="nice!"></img>
        </a>
      </div>

      <div className="My_planets">
        {data.map(({ title, onClick, id, image, divClass }) => (
          <MyPlanet
            title={title}
            onClick={onClick}
            key={id}
            image={image}
            divClass={divClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Planet;
