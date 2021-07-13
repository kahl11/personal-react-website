import React from 'react'
export const Home = ({className, pageState, updatePageState}) =>{
return(
<div className={`${className} scrollDiv`} style={{
    transform: `translateY(${pageState.divs.div1}vh)`
}}>
    <h1 className="kevinahlHeader">Kevin Ahl</h1>
    <button className="exploreButton"
        onClick={() => {
            updatePageState('down');
        }}
    >Explore</button>
</div>);

}