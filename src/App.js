// function App() {
//   return (
//     <div className="My_planets">
//       "Earth", "Mars", "Jupiter", "Venus", "Saturn", "SMAC", "Neptune", "Pluto",
//       "Sun"
//     </div>
//   );
// }

// export default App;

function App() {
  let planets = [
    "Earth",
    "Mars",
    "Jupiter",
    "Venus",
    "Saturn",
    "SMAC",
    "Neptune",
    "Pluto",
    "Sun",
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
