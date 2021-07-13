import react from 'react';
import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import reactLogo from '../assets/react.png';
import typescriptLogo from '../assets/typescript.png';
import nodeLogo from '../assets/nodejs.png';
import javascriptLogo from '../assets/javascript.png';
import pwaLogo from '../assets/pwa.png';

const fadeImages = [
	{
	url: reactLogo,
	},
	{
	url: nodeLogo
	},
	{
	url: pwaLogo,
	},
	{
	url: typescriptLogo,
	},
	{
	url: javascriptLogo
	},
      ];

export const WebDesign = ({className, pageState}) =>{
return(
<div className={`${className} scrollDiv`} style={{
    transform: `translateY(${pageState.divs.div3}vh)`
}}>
<div className='webdesignRow'>
	<div className="webdesignCol lightbox">
	<h1 className="mainHeader">Web Design</h1>
	<p style={{marginTop:"20px"}}>Github: <a style={{color:"white"}} href="https://github.com/kahl11">https://github.com/kahl11</a></p>

	<p style={{marginTop:"20px"}}>
	I have worked with a variety of web frameworks and libraries. I started my web development career making wordpress plugins in PHP as a freelancer. In the last couple years I have moved to React and React Native, as well as picking up flutter to support as many devices and customers as possible. 
	</p>
	<p style={{marginTop:"20px", fontSize: "30px", fontWeight:"600"}}>Experience</p>
	
	<p style={{marginTop:"20px"}}>Uvic Bookstore - Lead Developer:</p>
	<p>&nbsp;&nbsp;Fullstack development in PHP with symfony.</p>

	<p style={{marginTop:"20px"}}>Vistacan - Jr Software Engineer:</p>
	<p>&nbsp;&nbsp;Open source ehealth development in django and python.</p>

	<p style={{marginTop:"20px"}}>Freelance:</p>
	<p>&nbsp;&nbsp;abom.ca</p>
	<p>&nbsp;&nbsp;motiongrey.com</p>
	<p>&nbsp;&nbsp;surfbc.ca</p>
	</div>
	<div className="webdesignCol">
		<div className="webdesignHalfCol lightbox" style={{marginBottom: "40px"}}>
		<div className="slide-container">
      <Fade arrows={false} duration={3000} transitionDuration={300}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
		</div>
		<div className="webdesignHalfCol lightbox">
			<ul className="webdevList">
				<li className="webdevLi">React</li>
				<li className="webdevLi">React Native</li>
				<li className="webdevLi">Flutter</li>
				<li className="webdevLi">Typescript</li>
				<li className="webdevLi">NodeJS</li>
			</ul>
			<ul className="webdevList">
			<li className="webdevLi">Javascript</li>
				<li className="webdevLi">HTML/CSS</li>
				<li className="webdevLi">PHP</li>
				<li className="webdevLi">Django</li>
				<li className="webdevLi">PWA</li>
			</ul>
		</div>
	</div>
	<div>

	</div>
</div>
</div>);

}