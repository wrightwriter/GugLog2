import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";

export default class Name extends Component {
  state = {
    mouseY: this.props.mouseY,
    mouseX: this.props.mouseX,
  };

  // componentWillReceiveProps() {
  //   //console.log(this.props);
  //   let outputTrans = this.props.mouseX / window.innerWidth;

  //   this.styleLastName = {
  //     transform: `rotate(${outputTrans - 1.3}deg)`,
  //   };
  // }

  render() {
    return (
      <div className='Name'>
        <div className='FirstName'>{this.props.firstName}</div>
        <div style={this.styleLastName} className='LastName'>
          {this.props.lastName}
        </div>
      </div>
    );
  }
}
