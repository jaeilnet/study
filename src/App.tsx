import React from "react";

import "./App.css";
import { Usage as CompoundComponents } from "./components/compound-components/Usage";
import { Usage as ControlComponents } from "./components/control-props/Usage";
import { Usage as CustomHookComponents } from "./components/custom-hook-component/Usage";
import { Usage as PropsGetterComponents } from "./components/props-getters/Usage";
import { Usage as StateReducerComponent } from "./components/state-reducer/Usage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Compound-Components</h1>
        <CompoundComponents />
        <h1>Control-Components</h1>
        <ControlComponents />
        <h1>Custom-Hook-Components</h1>
        <CustomHookComponents />
        <h1>Props-Getter-Components</h1>
        <PropsGetterComponents />
        <h1>State-Reducer-Component</h1>
        <StateReducerComponent />
      </header>
    </div>
  );
}

export default App;
