import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { LoaderContainer } from "./AppElement";
import Home from "./pages/index.js";
import RingLoader from "react-spinners/RingLoader";
function App() {
  window.onunload = function () {
    window.scrollTo(0, 0);
  };

  const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
      <LoaderContainer isLoading={true}>
        <RingLoader color="rgb(241, 113, 27)" loading={true} size={100} />
      </LoaderContainer>
      <Home isLoading={true} setIsLoading={setIsLoading} />
    </Router>
  );
}

export default App;
