import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = ({ isLoggedIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    setDropDown(!isDropDown);
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#" onClick={handleToggle}>Games</a>
              <ul  className={`dropdown-menu ${isDropDown ? 'dropdown-menu-show' : ''}`}>
                <li>
                  <Link to="/game1">Game 1</Link>
                </li>
                <li>
                  <Link to="/game2">Game 2</Link>
                </li>
                <li>
                  <Link to="/game3">Game 3</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        )}
      </div>
    
    </nav>
  );
};

export default Navbar;