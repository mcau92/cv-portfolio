import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/index.js";
import React from "react";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
