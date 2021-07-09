import React, {useRef, useEffect, useState} from 'react'


export const Home = ({className, pageState, updatePageState}) =>{
return(
<div className={className} style={{
    transform: `translateY(${pageState.divs.div1}px)`
}}>
    <h1 className="kevinahlHeader">Kevin Ahl</h1>
</div>);

}