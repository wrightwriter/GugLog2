import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Route, Switch, withRouter} from "react-router-dom";

import Button from "./Button";
import Name from "./Name";

 function Header(props) {
  let {mouseX, mouseY} = props;
  let path = props.location.pathname;

  const [style, setStyle] = useState(`
  #background {
    transition: all 300ms ease-in;
    filter: blur(0px);
  }
  `);

  function _toggleStyle(toggle){
    if (toggle=="true"){
      setStyle(`#background {
        transition: all 300ms ease-in;
        filter: brightness(0.7) blur(2.6px);
      }`)
    } else if (toggle=="false"){
      setStyle(`#background {
        transition: all 300ms ease-in;
        filter: brightness(1.0) blur(0px);
      }`)
    }

  }


  const firstName = "Petar";
  const lastName = "GUgLeV";

  const button_about = {title: "About", to: "/"};
  const button_blog = {title: "Blog", to: "/blog"};
    
  // <Button path={path} title={button_blog.title} to={button_blog.to} toggleStyle={toggle=>{_toggleStyle(toggle)}}                        />
  const button_contact = {title: "Contact", to: "/contact"};
  const button_projects = {title: "Projects", to: "/projects"};

  return (
    <header>
      <Name
        firstName={firstName}
        lastName={lastName}
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <nav className='Buttons'>
      <style>
      {style}
      </style>
        <Button path={path} title={button_about.title} to={button_about.to}       toggleStyle={toggle=>{_toggleStyle(toggle)}}                        />
        <Button path={path} title={button_contact.title} to={button_contact.to}   toggleStyle={toggle=>{_toggleStyle(toggle)}}                        />
        <Button path={path} title={button_projects.title} to={button_projects.to} toggleStyle={toggle=>{_toggleStyle(toggle)}}                        />
      </nav>
    </header>
  );
}
export default withRouter(Header);
 