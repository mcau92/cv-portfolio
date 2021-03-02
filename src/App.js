import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/index.js";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { useState, useEffect } from "react";
import { LoaderContainer } from "./AppElement";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <Router>
      {loading === false ? (
        <Home />
      ) : (
        <LoaderContainer>
          <Loader
            type="Puff"
            color="rgb(241, 113, 27)"
            height={100}
            width={100}
          />
        </LoaderContainer>
      )}
    </Router>
  );
}

export default App;
