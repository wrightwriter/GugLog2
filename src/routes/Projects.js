import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Audio_Project1 = {
  title: "SyncFO",
  description:
    `This is a plugin for the digital audio workstation Ableton Live. It acts as an LFO, whose speed can me modulated by a MIDI signal. Signal shape be changed and speed - manipulated.   
    [Download](imgur.com)`,
  pictures: ["", ""],
  image: "https://i.imgur.com/SNU8hFi.jpg",
  side: "left"
};
const Audio_Project2 = {
  title: "Hallucinator",
  description: "This is a Max For Live audio device, which can change things.",
  pictures: ["", ""],
  image: "https://i.imgur.com/SNU8hFi.jpg",
  side: "right"
};

const Script_Project1 = {
  title: "Soundcloud Demetricator",
  description: "This",
  image: "https://i.imgur.com/SNU8hFi.jpg",
  side: "left"

}


export default function Projects() {
  return (
    <div className='Page'>
      <div className='Projects'>
        <Category title='Audio/ Visual'>
          <Project project={Audio_Project1} />
          <Project project={Audio_Project2} />
        </Category>
        <Category title='Scripts'>
          <Project project={Script_Project1} />
          <Project project={Script_Project1} />
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

  let imgStyle;

  project.side == "left" ? imgStyle ={float: "left"} : imgStyle = {float: "right"};


  return (
    <article className='Project'>
      {project.image ? <img style={imgStyle} src={project.image} /> : <>no img</>}
      <div className='text'>
        <div className='title'>{project.title}</div>

        <div className='description'>
          <ReactMarkdown source={project.description} />
        </div>
      </div>
    </article>
  );
}
