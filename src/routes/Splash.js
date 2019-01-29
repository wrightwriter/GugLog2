import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import avatar from '../res/avatar3.png';

export default function Splash() {
  return (
    <div className='Page'>
      <div className='About'>
        <div className='avatar'>
          <img src={avatar} alt='' />
        </div>
        <div className='Title'>
          <div className='box'>//Design</div>
          <div className='box'>//Code</div>
          <div className='box'>//Music</div>
          <div className='box'>//Skate</div>
        </div>

        <div className='Description'>
          I am a web developer and designer, based in Sofia, Bulgaria. Currently
          pursuing a bachelor's degree in Informatics. I like using the
          MongoDB/Node.JS/React/Express.js stack. It's the basis for my current
          project -{" "}
          <a href='https://wrightwriter.github.io/Push2ChorDB/#/'>
            Push2ChorDB
          </a>
        </div>
      </div>
    </div>
  );
}
