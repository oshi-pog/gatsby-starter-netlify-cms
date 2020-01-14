import React from 'react';
import logo from '../../img/logo-ptd.svg';
import './NavbarFixed.scss';
import NavButton from './components/NavButton';
import { Link } from 'gatsby'

function navbar() {
    return (
      <div className="navbar">
          <Link to="/" className="logo"><img src={logo}></img></Link>
          <div className="nav-links">
              <Link to="/about" className="nav-link">About Us</Link> 
              <Link to="/blog" className="nav-link">Our Blog</Link> 
              <NavButton/>
          </div>
      </div>
    );
  }
  
  export default navbar;