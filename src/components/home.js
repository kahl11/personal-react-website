import React, {useRef, useEffect, useState} from 'react'

import logoStick from '../assets/logoStick.svg'
import logoTopCir from '../assets/logoTopCir.svg'
import logoBottomCir from '../assets/logoBottomCir.svg'
import logoTri from '../assets/logoTri.svg'

export const Home = ({className, pageState, updatePageState}) =>{
    const logoStickRef = useRef(null);
    const logoTopCirRef = useRef(null);
    const logoBottomCirRef = useRef(null);
    const logoTriRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0.0, y: 0.0 });

    const updateMousePosition = (event) => {
        const scaler = 15;
        let localMouseY = (event.clientY / window.innerHeight - 0.5) * scaler;
        let localMouseX = (event.clientX / window.innerWidth - 0.5) * scaler;
        setMousePos({ x: localMouseX, y: localMouseY });
    };
    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
    }  
    }, [])
return(
<div className={className} style={{
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
</div>);

}