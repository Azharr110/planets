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
      divTextClass: "text-mercury",
    },
    {
      id: 4,
      title: "Venus",
      image: venus,
      divClass: "venus",
      divTextClass: "text-venus",
    },
    {
      id: 1,
      title: "Earth",
      image: earth,
      divClass: "earth",
      divTextClass: "text-earth",
    },
    {
      id: 2,
      title: "Mars",
      image: mars,
      divClass: "mars",
      divTextClass: "text-mars",
    },
    {
      id: 3,
      title: "Jupiter",
      image: jupiter,
      divClass: "jupiter",
      divTextClass: "text-jupiter",
    },

    {
      id: 5,
      title: "Saturn",
      image: saturn,
      divClass: "saturn",
      divTextClass: "text-saturn",
    },

    {
      id: 8,
      title: "Uranus",
      image: uranus,
      divClass: "uranus",
      divTextClass: "text-uranus",
    },
    {
      id: 7,
      title: "Neptune",
      image: neptune,
      divClass: "neptune",
      divTextClass: "text-neptune",
    },
  ];
  return (
    <div className="body">
      <div>
        <a href="# ">
          <img className={`planet sun `} src={sun} alt="My Awesome Image"></img>
        </a>
      </div>
      <div className="My_planets">
        {planets.map((name, id) => (
          <div className={`${name.divClass}`} key={id}>
            <h2> {name.title} </h2>
            <a href="#">
              <img
                className={`floating planet `}
                src={name.image}
                alt="My Awesome Image"
              ></img>
            </a>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
export default App;
