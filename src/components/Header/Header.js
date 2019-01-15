import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";

import Button from "./Button";
import Name from "./Name";

export default function Header() {
  const firstName = "Petar";
  const lastName = "Guglev";

  const button_about = {title: "About", to: "/about"};
  const button_blog = {title: "Blog", to: "/blog"};
  const button_contact = {title: "Contact", to: "/contact"};

  return (
    <header>
      <Name firstName={firstName} lastName={lastName} />
      <nav className='Buttons'>
        <Button title={button_about.title} to={button_about.to} />
        <Button title={button_blog.title} to={button_blog.to} />
        <Button title={button_contact.title} to={button_contact.to} />
      </nav>
    </header>
  );
}
