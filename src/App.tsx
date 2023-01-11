import React from "react";

import "./App.css";
import { Usage as CompoundComponents } from "./components/compound-components/Usage";
import { Usage as ControlComponents } from "./components/control-props/Usage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Compound-Components</h1>
        <CompoundComponents />
        <h1>Control-Components</h1>
        <ControlComponents />
      </header>
    </div>
  );
}

export default App;
