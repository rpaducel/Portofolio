import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import hamburger from '../../assets/menuItem.png'
import {Link} from 'react-scroll';
import {useState} from 'react'



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <nav className="navbar">
           <a href="/"><img src={logo} alt="Logo" className='logo' /></a>
            <div className="desktopMenu">
               <Link activeClass='active' to='home' spy={true} smooth={true} offset={-79} duration={500} className="desktopMenuListItem">Home</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-79} duration={500} className="desktopMenuListItem">About</Link>
               <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Projects</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-window.innerHeight + 330} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>
            
            <img src={hamburger} alt="menu-button" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
               <Link activeClass='active' to='home' spy={true} smooth={true} offset={-71} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-71} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
               <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-71} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-window.innerHeight + window.innerHeight / 4} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
        
    )
}
export default Navbar
