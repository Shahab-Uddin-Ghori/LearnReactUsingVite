import React from "react";
import "./App.css";
import CountingByclick from "./Sec1/CountingByclick";
import Calculator from "./Sec2/Calculator";

function App() {
  return (
    <div className="main">
      <CountingByclick />
      <Calculator />
    </div>
  );
}

export default App;
