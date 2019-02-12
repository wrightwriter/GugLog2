import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Project_1_Web_Color from "../res/Project_Web_1_Col.png";

const Web_Project1 = {
  title: "Push2ChorDB",
  description: `A website, in which you can submit edit and save to collection chords for the device Ableton Push 2. You can try out the beta [here on Github](https://wrightwriter.github.io/Push2ChorDB/#/)`,
  image: "https://i.imgur.com/GM9brQS.png",
  side: "right",
};

const Audio_Project1 = {
  title: "SyncFO",
  description: `This is a plugin for the digital audio workstation Ableton Live. It acts as an LFO, whose speed can me modulated by a MIDI signal. Signal shape be changed and speed - manipulated.   
    [Download](https://github.com/wrightwriter/SyncoPan)`,
  image: "",
  side: "left",
};
const Audio_Project2 = {
  title: "Visual Projects",
  description:
    "Shaders and visual programming are cool, and go nicely with music. I have been using Max MSP to make trippy visal toys, which respond to my music. I also have some experience with WebGL and Three.JS",
  image: "",
  side: "right",
};

const Script_Project1 = {
  title: "SC Demetricator",
  description:
    "A browser plugin which removes not only the likes, but most metrics from the site Soundcloud. Peek at the source code on [Github](https://github.com/wrightwriter/SC_Demetricator)",
  image: "https://i.imgur.com/lskPqUU.png",
  side: "left",
};
const Script_Project2 = {
  title: "FB Demetricator",
  description: "A port of the abovementioned plugin, so it can function on Facebook Mobile.",
  image: "https://i.imgur.com/oSUbiSI.png",
  side: "right",
};
const Script_Project3 = {
  title: "AutoTagger",
  description:
    "A python script, which goes through your downloaded MP3s and automatigally tags them, according to how you've named them. Required naming format 'Artist - Songname' [Check it out on github](https://github.com/wrightwriter/AutoTagger)",
  image: "",
  side: "left",
};
const Script_Project4 = {
  title: "Youtube UnDistractor",
  description:
    "It's very easy to get distracted on the internet. Your interests are harvested by corporations, such that you spend as much time as possible browsing. I think you should be ablet to opt out. That's why I wrote this extension, which lets you be the one to decide wether to get recommendations on YouTube. [Chrome extension](https://chrome.google.com/webstore/detail/youtube-undistractor/kobhfnheaeonfagploiaikaiiffamnbe) [UserScript](https://github.com/wrightwriter/YouTube-Undistractor/raw/master/UserScript/script.js) [GitHub](https://github.com/wrightwriter/YouTube-Undistractor)",
  image: "https://i.imgur.com/i7KXNLR.png",
  side: "left",
};

export default function Projects() {
  return (
    <div className='Page'>
      <div className='Projects'>
        <Category title='Web'>
          <Project project={Web_Project1} />
        </Category>
        <Category title='Scripts'>
          <Project project={Script_Project4} />
          <Project project={Script_Project1} />
          <Project project={Script_Project2} />
          <Project project={Script_Project3} />
        </Category>
        <Category title='Audio/ Visual'>
          <Project project={Audio_Project1} />
          <Project project={Audio_Project2} />
        </Category>
      </div>
    </div>
  );
}

function Category(props) {
  return (
    <div className='Category'>
      <div className='CategoryTitle'>
        <div>{props.title}</div>
      </div>
      {props.children}
    </div>
  );
}

function Project(props) {
  let project = props.project;
  const [imgStyle, setImgStyle] = useState({float: "none"});

  let text = ``;
  useEffect(() => {
    if (project.side == "left") {
      setImgStyle({
        float: "left",
      });
    } else {
      setImgStyle({float: "right"});
    }

    var mediaQuery = window.matchMedia("(max-width: 500px)");
    if (mediaQuery.matches) {
      setImgStyle({float: "none"});
    }
  });
  return (
    <article className='Project'>
      {project.image ? <img style={imgStyle} src={project.image} /> : <></>}
      <div className='text'>
        <div className='title'>{project.title}</div>

        <div className='description'>
          <ReactMarkdown
            source={project.description}
            renderers={{
              Link: props => (
                <a href={props.href} target='_blank'>
                  {props.children}
                </a>
              ),
            }}
          />
        </div>
      </div>
    </article>
  );
}
