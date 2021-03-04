import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/index.js";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderContainer } from "./AppElement";
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
      <LoaderContainer isLoading={isLoading}>
        <Loader
          type="Puff"
          color="rgb(241, 113, 27)"
          height={100}
          width={100}
        />
      </LoaderContainer>
      <Home isLoading={isLoading} setIsLoading={setIsLoading} />
    </Router>
  );
}

export default App;
