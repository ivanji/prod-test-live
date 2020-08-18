import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import CardWidget from "./components/CardWidget";

const App = () => (
  <div>
    <CardWidget />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
