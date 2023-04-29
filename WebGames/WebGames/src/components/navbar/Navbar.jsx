import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = ({ isLoggedIn, logoutAction,userName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMenu = () => {
    if(isMobileMenuOpen)
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    setDropDown(!isDropDown);
    if(isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen);
   
  };
  

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">WebGames</Link>
      <a href="#" className="toggle-button" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/home"  onClick={closeMenu} >Home</Link>
            </li>
            <li>
              <a href="#" onClick={
                ()=> {
                  setDropDown(!isDropDown)
              }}>Games</a>
              <ul  className={`dropdown-menu ${isDropDown ? 'dropdown-menu-show' : ''}`}>
                <li>
                  <Link  onClick={handleToggle} to="/xo">tic-tac-toe</Link>
                </li>
                <li>
                  <Link onClick={handleToggle} to="/matching">Matching</Link>
                </li>
                <li>
                  <Link onClick={handleToggle} to="/rps">RPS</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link  onClick={closeMenu} to="/about">About</Link>
            </li>
            <li>
            <div>
            <a onClick={logoutAction} className="btn-logout" href="#">Logout</a>
          </div>
            </li>

          </ul>
        ) : (
          <ul>
            <li>
              <Link onClick={closeMenu} to="/welcome">Welcome</Link>
            </li>
            
            <li>
              <Link onClick={closeMenu} to="/signup">Signup</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/login">Login</Link>
            </li>

          </ul>
        )}
      </div>
    
    </nav>
  );
};

export default Navbar;