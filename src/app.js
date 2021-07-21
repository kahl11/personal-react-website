import React, { useState, useRef, useEffect, useReducer, Fragment, useCallback } from "react";
import ReactDOM from "react-dom";
import "./css/style.scss";
import "regenerator-runtime/runtime.js";
import bench from './assets/bench.jpg';
import {Home} from './components/home';
import { About } from "./components/about";
import {Navbar} from './components/navbar';
import { WebDesign } from "./components/webdesign";

const green = "#5de393";
const yellow = "#fce181";

function pageStateReducer(pageState, action) {
    switch (action) {
      case 'down':
        if(pageState.page == 0) return {page: 1, divs:{div1: "-100", div2: "0", div3: "100", div4: "100", div5: "100"}};
        if(pageState.page == 1) return {page: 2, divs:{div1: "-100", div2: "-100", div3: "0", div4: "100", div5: "100"}};
        if(pageState.page == 2) return {page: 3, divs:{div1: "-100", div2: "-100", div3: "-100", div4: "0", div5: "100"}};
        if(pageState.page == 3) return {page: 4, divs:{div1: "-100", div2: "-100", div3: "-100", div4: "-100", div5: "0"}};
        return pageState;
      case 'up':
        if(pageState.page == 1) return {page: 0, divs:{div1: "0", div2: "100", div3: "100", div4: "100", div5: "100"}};
        if(pageState.page == 2) return {page: 1, divs:{div1: "-100", div2: "0", div3: "100", div4: "100", div5: "100"}};
        if(pageState.page == 3) return {page: 2, divs:{div1: "-100", div2: "-100", div3: "0", div4: "100", div5: "100"}};
        if(pageState.page == 4) return {page: 3, divs:{div1: "-100", div2: "-100", div3: "-100", div4: "0", div5: "100"}};
        return pageState;
      case 'div0':
        return {page: 0, divs:{div1: "0", div2: "100", div3: "100", div4: "100", div5: "100"}};
      case 'div1':
        return {page: 1, divs:{div1: "-100", div2: "0", div3: "100", div4: "100", div5: "100"}};
      case 'div2':
        return {page: 2, divs:{div1: "-100", div2: "-100", div3: "0", div4: "100", div5: "100"}};
      case 'div3':
        return {page: 3, divs:{div1: "-100", div2: "-100", div3: "-100", div4: "0", div5: "100"}};
      case 'div4':
        return {page: 4, divs:{div1: "-100", div2: "-100", div3: "-100", div4: "-100", div5: "0"}};
      case 'mobile':
        return {page: 4, divs:{div1: "0", div2: "100", div3: "230", div4: "330", div5: "430"}};
      default:
        throw new Error();
    }
  }

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function App() {
    const [pageState, updatePageState] = useReducer(pageStateReducer, {page: 0, divs:{div1: "0", div2: "100", div3: "100", div4: "100", div5: "100"}});
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
      if(windowDimensions.width < 500){
        console.log("mobile");
        updatePageState('mobile');
      }
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    var canScroll = true; //used to debounce scrolling
    const scrolledEventHandler = (event) => {
      if(canScroll){
        if(event.deltaY > 0){
            updatePageState("down");
        }else if(event.deltaY < 0){
            updatePageState('up');
        }
        canScroll = false;
      }
      setTimeout(() => {canScroll = true}, 1000);//debounce
    }
    useEffect(() => {
      if(windowDimensions.width > 500){
        window.addEventListener("wheel", scrolledEventHandler);

        return () => {
            window.removeEventListener("wheel", scrolledEventHandler);
    }  
  }
    }, [])
    return (
        <div className="main_container">
          {windowDimensions.width > 400 ? 
           <Navbar updatePageState={updatePageState}/>
           :
            null
           }
            <Home className="div1" pageState={pageState} updatePageState={updatePageState} width={windowDimensions.width} height={windowDimensions.height}/>
            <About className="div2" pageState={pageState} />
            <WebDesign className="div3" pageState={pageState} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);