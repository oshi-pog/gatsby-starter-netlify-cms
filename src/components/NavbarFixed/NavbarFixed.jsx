import React from 'react';
import logo from '../../img/logo-ptd.svg';
import './NavbarFixed.scss';
import NavButton from './components/NavButton';

function navbar() {
    return (
      <div className="navbar">
          <a to="/" className="logo"><img src={logo}></img></a>
          <div className="nav-links">
              <a to="/about" className="nav-link">About Us</a> 
              <NavButton/>
          </div>
      </div>
    );
  }
  
  export default navbar;