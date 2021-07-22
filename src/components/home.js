import React, {useState, useEffect} from 'react'
import { slide as Menu } from 'react-burger-menu'
import menuIcon from '../assets/menu_white.svg';

export const Home = ({className, pageState, updatePageState, width, height}) =>{
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    useEffect(() => {
        console.log(hamburgerOpen)
    }, [hamburgerOpen])
return(
<div className={`${className} scrollDiv`} id="home" style={{
    transform: `translateY(${pageState.divs.div1}vh)`
    }}>
    {width < 500 ?
               <Menu onOpen={() => {setHamburgerOpen(true)} } onClose={() => {setHamburgerOpen(false)}} isOpen={hamburgerOpen} customBurgerIcon={ <img src={menuIcon} /> }>
               <a onClick={() => {setHamburgerOpen(false)}} className="menu-item" >Home</a>
               <a onClick={() => {setHamburgerOpen(false)}} className="menu-item" >About</a>
               <a onClick={() => {setHamburgerOpen(false)}} className="menu-item" >Web Design</a>
               <a onClick={() => {setHamburgerOpen(false)}} className="menu-item" >Projects</a>
               <a onClick={() => {setHamburgerOpen(false)}} className="menu-item" >Contacts</a>
            </Menu> 
            :
            null   
    }
    <p className="wip">This website is a work in progress. You can view the code for it on my <a href="https://github.com/kahl11/personal-react-website">github</a></p>
    <h1 className="kevinahlHeader">Kevin Ahl</h1>
    
    <button className="exploreButton"
        onClick={() => {
            if(width > 500){
                updatePageState('down');
            }
        }}
    >Explore</button>
</div>);

}