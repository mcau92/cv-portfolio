import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { LoaderContainer } from "./AppElement";
import Home from "./pages/index.js";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
function App() {
  window.onunload = function () {
    window.scrollTo(0, 0);
  };
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
      <LoaderContainer isLoading={isLoading}>
        <DotLoader
          color="rgb(241, 113, 27)"
          loading={isLoading}
          css={override}
          size={100}
        />
      </LoaderContainer>
      <Home isLoading={isLoading} setIsLoading={setIsLoading} />
    </Router>
  );
}

export default App;
