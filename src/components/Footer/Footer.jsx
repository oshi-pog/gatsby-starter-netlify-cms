import React from 'react';
import footerLogo from '../../img/footer-logo.svg';
import './Footer.scss';
import NavApplicationFormPopup from './components/NavApplicationButton';
import MailChimpForm from '../MailChimpForm/MailChimpForm'

function Footer() {
    return (
      <div className="footer">
        <div className="footer-navbar">
            <img src={footerLogo} className="footer-logo" alt=""></img>
            <MailChimpForm></MailChimpForm>
            <div className="footer-nav-links">
                <a href="/about" className="nav-link">About Us</a> 
                <NavApplicationFormPopup/>
            </div>
        </div>

        <div className="footer-extra-links">
          <p>Say <a href="mailto:hello@ptd-cph.com" className="footer-email">hello@ptd-cph.com</a></p>
          <div className="footer-built-wrapper"><p>Built by PTD © 2019</p></div>
        </div>
      </div>
    );
  }
  
  export default Footer;