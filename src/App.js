import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

// import routes

import Header from "./components/Header/Header";
import Splash from "./routes/Splash";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exac path="/" component={Splash} />
      </Switch>
    </div>
  );
}
