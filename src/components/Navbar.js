import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1>Aisorya</h1>
      </Link>
      <ul className={click ? "nav-menu active": "nav-menu"}> 
        <li> 
            <Link to="/">Home</Link>
        </li>
        <li> 
            <Link to="/Journey">Journey</Link>
        </li>
        <li> 
            <Link to="/Project">Projects</Link>
        </li>
     </ul>
     <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: "#134B47"}}/>) : (<FaBars size={30} style={{ color: "#134B47"}}/>)}
     </div>

      
    </div>
  )
}

export default Navbar
