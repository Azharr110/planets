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
        <div
          style={{
            display: "block",
            color: "white",
            width: 100,
            padding: 30,
          }}
        >
          <Button color="danger" onClick={toggle}>
            Click me to know more about Mercury
          </Button>
          <Modal
            style={{
              backgroundColor: "white",
              display: "block",
              width: 700,
              padding: 30,
            }}
            isOpen={modal}
            toggle={toggle}
          >
            <ModalHeader style={{ color: "black" }}>Mercury</ModalHeader>
            <img src={mercury} height="150px" width="150px" />

            <ModalBody style={{ color: "black", float: "right" }}>
              It has a solid surface that is covered with craters like our Moon.
              It has a thin atmosphere, and it doesn't have any moons. Mercury
              likes to keep things simple. Mercury spins slowly compared to
              Earth, so one day lasts a long time. Mercury takes 59 Earth days
              to make one full rotation.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Okay
              </Button>
            </ModalFooter>
          </Modal>
        </div>
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
