import React from 'react'
import headshot from '../assets/headshot.jpg';

export const About = ({className, pageState}) =>{
return(
<div className={`${className} scrollDiv`} style={{
    transform: `translateY(${pageState.divs.div2}vh)`
}}>
	<div className={"aboutLightbox"}>
	<h1 className={"mainHeader"} >About</h1>
	<p className={"about largerText"}>
		<img className={'headshot'} src={headshot}></img>
	Fullstack web development. With a history in e-health and ecommerce, Ive developed software use by local small businesses and million dollar companie. It only gets better from here. Lately Ive moved to react and flutter development. Always up to date on new and groundbreaking technologies. I love to learn new tools and develop my skills. <br/><br/>
	The web is a constantly changing. Together, I would love to bring your business to the forefront. With apps that work on the web, phones, destops and more, we can bring your idea to customers who will be as happy using it as I am bringing it to life. <br/><br/>

	Click <a onClick={() => {}} style={{textDecoration: "underline", color: "white"}}>here</a> to be brought to the contact page, or keep scrolling to see the cool things Ive been making.
	</p>
	</div>
</div>);
}