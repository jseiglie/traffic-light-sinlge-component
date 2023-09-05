import "./App.css";
import React, { useState } from "react";

function App() {
  const [glow, setGlow] = useState("");
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="App">
      <button className="btn btn-primary" onClick={()=>show? setShow(false) : setShow(true)}>Purple</button>

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
          <div className={`light purple ${show ? "show" : "hidden"} ${glow === "purple" ? "glow" : ""} `}
          onClick={()=>setGlow("purple")}
          >
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
