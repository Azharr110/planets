import earth from "./assets/images/icon-earth.png";
import sun from "./assets/images/icon-sun.png";
import jupiter from "./assets/images/icon-jupiter.png";
import mars from "./assets/images/icon-mars.png";
import mercury from "./assets/images/icon-mercury.png";
import neptune from "./assets/images/icon-neptune.png";
import saturn from "./assets/images/icon-saturn.png";
import uranus from "./assets/images/icon-uranus.png";
import venus from "./assets/images/icon-venus.png";
function App() {
  let planets = [
    {
      id: 6,
      title: "Mercury",
      image: mercury,
      divClass: " mercury",
    },
    {
      id: 4,
      title: "Venus",
      image: venus,
      divClass: "venus",
    },
    {
      id: 1,
      title: "Earth",
      image: earth,
      divClass: "earth",
    },
    {
      id: 2,
      title: "Mars",
      image: mars,
      divClass: "mars",
    },
    {
      id: 3,
      title: "Jupiter",
      image: jupiter,
      divClass: "jupiter",
    },

    {
      id: 5,
      title: "Saturn",
      image: saturn,
      divClass: "saturn",
    },

    {
      id: 8,
      title: "Uranus",
      image: uranus,
      divClass: "uranus",
    },
    {
      id: 7,
      title: "Neptune",
      image: neptune,
      divClass: "neptune",
    },
  ];
  return (
    <div className="body">
      <div>
        <a>
          <img className={`planet sun `} src={sun}></img>
        </a>
      </div>
      <div className="My_planets">
        {planets.map((name) => (
          <div>
            {" "}
            <h2> {name.title}</h2>
            <a>
              <img className={`planet ${name.divClass}`} src={name.image}></img>
            </a>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
export default App;
