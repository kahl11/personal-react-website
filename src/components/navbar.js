import React from 'react';

export const Navbar = ({updatePageState}) => {
	return(
		<div className="navbarHolder">
			<a onClick={() => updatePageState("div0")} className="navItem" >Home</a>
			<a onClick={() => updatePageState("div1")} className="navItem" >About</a>
			<a onClick={() => updatePageState("div2")} className="navItem" >Web Design</a>
			<a onClick={() => updatePageState("div3")} className="navItem" >Projects</a>
			<a onClick={() => updatePageState("div4")} className="navItem" >Contacts</a>
		</div>
	);
}