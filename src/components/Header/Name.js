import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";

export default class Name extends Component {
  state = {
    x: 0,
    y: 0,
  };

  styleLastName = {
    transform: `rotate(${this.state.x}deg)`,
  };

  _onMouseMove(e) {
    console.log(e);
    this.setState({x: e.screenX, y: e.screenY});
  }

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
