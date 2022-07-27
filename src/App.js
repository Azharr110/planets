import earth from "./assets/images/icon-earth.png";
import globe from "./assets/images/icon-globe.png";
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
      title: "Earth",
      image: { earth },
    },
    {
      title: "Mars",
      image: { mars },
    },
    {
      title: "Jupiter",
      image: { jupiter },
    },
    {
      title: "Venus",
      image: { venus },
    },
    {
      title: "Saturn",
      image: { saturn },
    },
    {
      title: "SMAC",
      image: { mercury },
    },
    {
      title: "Neptune",
      image: { neptune },
    },
    {
      title: "Uranus",
      image: { uranus },
    },
    {
      title: "Sun",
      image: { globe },
    },
  ];
  return (
    <div className="body">
      <div className="My_planets">
        {planets.map((name) => (
          <h2>{name}</h2>
        ))}
      </div>{" "}
    </div>
  );
}
export default App;
