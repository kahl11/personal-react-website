import React, { useState, useRef, useEffect, useReducer, Fragment, useCallback } from "react";
import ReactDOM from "react-dom";
import "./css/style.scss";
import "regenerator-runtime/runtime.js";
import bench from './assets/bench.jpg';
import lightbulb from './assets/lightbulb.png';
import {Home} from './components/home';

const green = "#5de393";
const yellow = "#fce181";

function pageStateReducer(pageState, action) {
    console.log(action)
    switch (action) {
      case 'down':
        if(pageState.page == 0) return {page: 1, divs:{div1: "-1200"}, image: bench};
        return {page: 1, divs:{div1: "-1500"}, image: bench};
      case 'up':
        if(pageState.page == 0) return {page: 1, divs:{div1: "0"}, image: lightbulb};
        if(pageState.page == 1) return {page: 1, divs:{div1: "0"}, image: lightbulb};
        return {page: 1, divs:{div1: "0"}, image: lightbulb};
      default:
        throw new Error();
    }
  }

export default function App() {
    const [pageState, updatePageState] = useReducer(pageStateReducer, {page: 0, divs:{div1: "0"}, image: lightbulb});
    let img = new Image();
      img.src = bench;
    const scrolledEventHandler = (event) => {
        if(event.deltaY > 0){
            updatePageState("down");
        }else if(event.deltaY < 0){
            updatePageState('up');
        }
    }
    useEffect(() => {
        window.addEventListener("wheel", scrolledEventHandler);
        return () => {
            window.removeEventListener("wheel", scrolledEventHandler);
    }  
    }, [])
    console.log(pageState.image)
    return (
        <div className="main_container" style={{backgroundImage: `url(${pageState.image})`}}>
            <Home className="div1" pageState={pageState} updatePageState={updatePageState}/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);