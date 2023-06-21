import "./App.css";
import React, { useState } from "react";

function App() {
  const [glow, setGlow] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <div
          className={`light red ${glow === "red" ? "glow" : ""}`}
          onClick={() => {
            setGlow("red");
          }}
        ></div>
        <div
          className={`light yellow ${glow === "yellow" ? "glow" : ""}`}
          onClick={() => {
            setGlow("yellow");
          }}
        ></div>
        <div
          className={`light green ${glow === "green" ? "glow" : ""}`}
          onClick={() => setGlow("green")}
        ></div>
      </div>
    </div>
  );
}

export default App;
