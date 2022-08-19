import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Mid from "./components/Mid";
import { useToggleState } from "./customHooks/useToggleState";

function App() {
  let [truth, toggleTruth] = useToggleState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A Very Original-Looking Hooks Demo Page</p>
        <div>{truth ? "True" : "False"}</div>
        <button onClick={(e) => toggleTruth()}>CLICK HERE</button>
        <Mid />
      </header>
    </div>
  );
}

export default App;
