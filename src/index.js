import React,{Component} from "react";
import ReactDOM from "react-dom";
import { Router, HashRouter } from "react-router-dom";
import {createBrowserHistory} from "history";

import "./styles/styles.scss";

import App from "./App";
let history = createBrowserHistory();

class Index extends Component {
  // loading
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2102))
  }
  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('intro_prog')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  
  render(){
    return (
      <HashRouter history={history}>
        <div className='Loading' />
        <App />
      </HashRouter>
    );

  }  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
