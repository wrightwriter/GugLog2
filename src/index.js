import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./styles/styles.scss";

import App from "./App";

function Index() {
  const history = createBrowserHistory();
  return (
    <div className="wrapper">
      <Router history={history}>
        <App />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
