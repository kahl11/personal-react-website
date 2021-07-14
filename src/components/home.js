import React from 'react'
export const Home = ({className, pageState, updatePageState}) =>{
return(
<div className={`${className} scrollDiv`} style={{
    transform: `translateY(${pageState.divs.div1}vh)`
}}>
    <p className="wip">This website is a work in progress. You can view the code for it on my <a href="https://github.com/kahl11/personal-react-website">github</a></p>
    <h1 className="kevinahlHeader">Kevin Ahl</h1>
    
    <button className="exploreButton"
        onClick={() => {
            updatePageState('down');
        }}
    >Explore</button>
</div>);

}