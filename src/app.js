import React, { useState, useRef, useEffect, useReducer, Fragment, useCallback } from "react";
import ReactDOM from "react-dom";
import "./css/style.scss";
import "regenerator-runtime/runtime.js";

import logoStick from './assets/logoStick.svg'
import logoTopCir from './assets/logoTopCir.svg'
import logoBottomCir from './assets/logoBottomCir.svg'
import logoTri from './assets/logoTri.svg'

function pageStateReducer(pageState, action) {
    console.log(action)
    switch (action) {
      case 'down':
        if(pageState.page == 0) return {page: 1, divs:{div1: "-1500"}, color:"#fce181"}
      default:
        throw new Error();
    }
  }

export default function App() {
    const logoStickRef = useRef(null);
    const logoTopCirRef = useRef(null);
    const logoBottomCirRef = useRef(null);
    const logoTriRef = useRef(null);
    const [pageState, updatePageState] = useReducer(pageStateReducer, {page: 0, divs:{div1: "0"}, color:"#5de393"});
    const [mousePos, setMousePos] = useState({ x: 0.0, y: 0.0 });
    const updateMousePosition = (event) => {
        const scaler = 15;
        let localMouseY = (event.clientY / window.innerHeight - 0.5) * scaler;
        let localMouseX = (event.clientX / window.innerWidth - 0.5) * scaler;
        setMousePos({ x: localMouseX, y: localMouseY });
    };
    const scrolledEventHandler = (event) => {
        if(event.deltaY > 0){
            updatePageState("down")
        }
    }
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("wheel", scrolledEventHandler);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("wheel", scrolledEventHandler);
    }  
    }, [])

    return (
        <div className="container is-max-desktop" style={{
            backgroundColor: pageState.color
        }}>
            <div className="div1" style={{
                transform: `translateY(${pageState.divs.div1}px)`
            }}>
                <h1 className="kevinahlHeader">kevin ahl .com</h1>
                <img ref={logoStickRef} className="logoStick" src={logoStick}
                    style={
                        {
                            transform: `translateX(-50%) perspective(500px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                        }
                    } />
                <img ref={logoTopCirRef} className="logoTopCir" src={logoTopCir}
                    style={
                        {
                            transform: `translateX(-50%) perspective(500px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                        }
                    } />
                <img ref={logoBottomCirRef} className="logoBottomCir" src={logoBottomCir}
                    style={
                        {
                            transform: `translateX(-50%) perspective(500px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                        }
                    } />
                <img ref={logoTriRef} className="logoTri" src={logoTri}
                    style={
                        {
                            transform: `translateX(-50%) perspective(500px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
                        }
                    } />
                <button className="keepGoingButton" onClick={() => {
                    updatePageState('down')
                }}>keep going!</button>
            </div>

        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);