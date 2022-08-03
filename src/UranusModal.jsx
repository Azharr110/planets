import React, { useState } from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import uranus from "./assets/images/icon-uranus.png";

export function UranusModal() {
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div
      style={{
        display: "block",
        color: "white",
        width: 100,
        padding: 30,
      }}
    >
      <Button color="danger" onClick={toggle}>
        Click me to know more about Uranus
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
        <ModalHeader style={{ color: "black" }}>
          <h2>Uranus</h2>
        </ModalHeader>
        <img src={uranus} height="150px" width="150px" />

        <ModalBody style={{ color: "black", float: "right" }}>
          It has a solid surface that is covered with craters like our Moon. It
          has a thin atmosphere, and it doesn't have any moons. Mercury likes to
          keep things simple. Mercury spins slowly compared to Earth, so one day
          lasts a long time. Mercury takes 59 Earth days to make one full
          rotation.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UranusModal;
