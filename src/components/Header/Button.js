import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch, Link} from "react-router-dom";

export default function Button(props) {
  let {title, to, path} = props;
  let isActive = path == to ? true : false;
  function onMouseEnter() {
    props.toggleStyle("true")
  }
  function onMouseLeave() {
    props.toggleStyle("false")
  }

  return (
    <nav
      className={isActive ? "ButtonActive" : "Button"}
      onMouseEnter={()=>{onMouseEnter()}}
      onMouseLeave={()=>{onMouseLeave()}}
      draggable="false"
      
      >
      <Link to={to}>{title}</Link>
      <div className="underline"></div>
    </nav>
  );
}
