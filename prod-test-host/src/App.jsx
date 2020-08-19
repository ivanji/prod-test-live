import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import CardWidget from "./components/CardWidget";
import Header from "./components/Header";

const App = () => (
  <div>
    <Header />
    <CardWidget />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
