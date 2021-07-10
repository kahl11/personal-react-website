import React, {useRef, useEffect, useState} from 'react'
import {Navbar} from './navbar';

export const Home = ({className, pageState, updatePageState}) =>{
return(
<div className={className} style={{
    transform: `translateY(${pageState.divs.div1}px)`
}}>
    <h1 className="kevinahlHeader">Kevin Ahl</h1>
    <Navbar/>
    <button className="exploreButton"
        onClick={() => {
            updatePageState('down');
        }}
    >Explore</button>
</div>);

}