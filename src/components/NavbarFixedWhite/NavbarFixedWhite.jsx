import React from 'react';
import logo from '../../img/logo-ptd-black.svg';
import './NavbarFixedWhite.scss';
import NavButton from './components/NavButton';
import { Link } from 'gatsby'


function navbar() {
    return (
      <div className="navbar-white">
          <Link href="/" className="logo"><img src={logo}></img></Link>
          <div className="nav-links">
              <Link href="/about"  className="nav-link">About Us</Link> 
              <Link to="/blog" className="nav-link">Our Blog</Link> 
              <NavButton/>
          </div>
      </div>
    );
  }
  
  export default navbar;