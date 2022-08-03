import React, { useState } from "react";

import earth from "./assets/images/icon-earth.png";
import jupiter from "./assets/images/icon-jupiter.png";
import mars from "./assets/images/icon-mars.png";
import mercury from "./assets/images/icon-mercury.png";
import neptune from "./assets/images/icon-neptune.png";
import saturn from "./assets/images/icon-saturn.png";
import uranus from "./assets/images/icon-uranus.png";
import venus from "./assets/images/icon-venus.png";
import { MercuryModal } from "./mercuryModal";
import { VenusModal } from "./VenusModal";
import { EarthModal } from "./EarthModal";
import { MarsModal } from "./MarsModal";
import { JupiterModal } from "./JupiterModal";
import { SaturnModal } from "./SaturnModal";
import { UranusModal } from "./UranusModal";
import { NeptuneModal } from "./NeptuneModal";

//Named function
// function abc () {}
// // Modal open state
// const [modal, setModal] = useState(false);

// // Toggle for Modal
// const toggle = () => setModal(!modal);

export const data = [
  {
    id: 6,
    title: "Mercury",
    image: mercury,
    divClass: " mercury",
    divTextClass: "text-mercury",
    // fnFireOnClick: ()=> {

    // }
    onclick: () => {
      console.log("azhar");
    },

    // url: { MercuryModal },
  },
  {
    id: 4,
    title: "Venus",
    image: venus,
    divClass: "venus",
    divTextClass: "text-venus",
    onClick: () => {
      console.log("Azhaaaa  ");
    },
    // url: { VenusModal },
  },
  {
    id: 1,
    title: "Earth",
    image: earth,
    divClass: "earth",
    divTextClass: "text-earth",
    url: { EarthModal },
  },
  {
    id: 2,
    title: "Mars",
    image: mars,
    divClass: "mars",
    divTextClass: "text-mars",
    url: { MarsModal },
  },
  {
    id: 3,
    title: "Jupiter",
    image: jupiter,
    divClass: "jupiter",
    divTextClass: "text-jupiter",
    url: { JupiterModal },
  },

  {
    id: 5,
    title: "Saturn",
    image: saturn,
    divClass: "saturn",
    divTextClass: "text-saturn",
    url: { SaturnModal },
  },

  {
    id: 8,
    title: "Uranus",
    image: uranus,
    divClass: "uranus",
    divTextClass: "text-uranus",
    url: { UranusModal },
  },
  {
    id: 7,
    title: "Neptune",
    image: neptune,
    divClass: "neptune",
    divTextClass: "text-neptune",
    url: { NeptuneModal },
  },
];

export default data;
