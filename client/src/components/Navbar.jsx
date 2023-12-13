import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
          Logo
        </div>
        <div className = "menu-icon" onClick={handleShowNavbar}>
        <Hamburger toggled={(showNavbar)}  />
        
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 

