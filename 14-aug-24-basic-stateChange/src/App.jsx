import { useState } from "react";

import "./App.css";
import StateChange from "./StateChange";
import UpdateData from "./UpdateData";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-700 p-6">
      <StateChange />
      <UpdateData />
    </div>
  );
}

export default App;
