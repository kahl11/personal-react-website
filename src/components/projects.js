import React from 'react'


export const Projects = ({className, pageState}) =>{
return(
<div className={`${className} scrollDiv`} style={{
    transform: `translateY(${pageState.divs.div2}vh)`
}}>
	
</div>);
}