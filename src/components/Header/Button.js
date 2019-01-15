import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link } from "react-router-dom";

export default function Button(props) {
  let { title, to } = props;

  return (
    <nav className="Button">
      <Link to={to}>{title}</Link>
    </nav>
  );
}
