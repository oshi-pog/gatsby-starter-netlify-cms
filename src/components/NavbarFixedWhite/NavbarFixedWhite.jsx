import React from 'react';
import logo from '../../../src/svgs/logo-ptd-black.svg';
import './NavbarFixedWhite.scss';
import NavButton from './components/NavButton';

import { Link } from "react-router-dom";

function navbar() {
    return (
      <div className="navbar-white">
          <Link to="/" className="logo"><img src={logo}></img></Link>
          <div className="nav-links">
              <Link to="/about"  className="nav-link">About Us</Link> 
              <NavButton/>
          </div>
      </div>
    );
  }
  
  export default navbar;