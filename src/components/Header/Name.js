import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";

var inter;
export default class Name extends Component {
  state = {
    mouseY: this.props.mouseY,
    mouseX: this.props.mouseX,
    lastName: "GUgLeV",
    lastnames: [
      "GUgLeV",
      "guGlEv",
      "GuGlEv",
      "gUGLev",
      "GugLeV",
      "GUGLEV",
      "Guglev",
      "guglEV",
      "gUgLeV",
      "gUGLev",
    ],
    currentName: "GUgLeV",
  };

  // componentWillReceiveProps() {
  //   //console.log(this.props);
  //   let outputTrans = this.props.mouseX / window.innerWidth;

  //   this.styleLastName = {
  //     transform: `rotate(${outputTrans - 1.3}deg)`,
  //   };
  // }
  mouseEnter() {
    this.setState({currentName: this.state.lastnames[2]});
    let i = 1;
    let iterationMax = this.state.lastnames.length - 1;
    inter = setInterval(() => {
      if (i <= iterationMax) {
        this.setState({currentName: this.state.lastnames[i]});
        i++;
      } else {
        i = 1;
        this.setState({currentName: this.state.lastnames[i]});
      }
    }, 202);
  }
  mouseLeave() {
    setTimeout(() => {
      clearInterval(inter);
      this.setState({currentName: this.state.lastName});
    }, 148);
  }
  render() {
    return (
      <div className='Name'>
        <div className='FirstName'>Petar</div>
        <div
          onMouseEnter={() => {
            this.mouseEnter();
          }}
          onMouseLeave={() => {
            this.mouseLeave();
          }}
          className='LastName'>
          {this.state.currentName}
        </div>
      </div>
    );
  }
}
