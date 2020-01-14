import React from 'react';
import './Testimonials.scss';
import NicolasImg from './img/nicolas.jpg'
import OutleryImg from './img/outlery.jpg'
import UrsusImg from './img/ursus.jpg'

import QuoteRight from '../../svgs/quote-right-solid.svg'

//Animations component
import ScrollAnimation from 'react-animate-on-scroll';


function Testimonials() {
    return (
      <div className="testimonials-grid">
          <img alt="quote" src={QuoteRight} className="testimonials-quote-svg"></img>
        <div className="testimonials-text-box">
        <div className="what-green-heading">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h1 className="green-heading-text">What our clients are saying</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="slideInLeft" >
              <div className="green-heading-line"></div>
            </ScrollAnimation>
        </div>
          <h1 className="what-h1">Testimonials</h1> 
        </div>

          <div className="testimonials-block">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
              <h2>Great experience working with PTD! They did our FB ads for Kickstarter, Indiegogo and our Shopify e-commerce site. Their hands on approach and tireless efforts gave us a huge campaign. We still use them for digital advertising.</h2>
              </ScrollAnimation>
          </div>

        <div className="testimonials-images-grid">
            <img alt=""className="testimonials-image image-left" alt="tesimonial image" src={OutleryImg}/>
            <img  alt=""className="testimonials-image image-middle" alt="tesimonial image" src={NicolasImg}/>
            <div className="testimonials-text">
                <h3 className="testimonials-name">Nicolas Aaagard</h3>
                <h3 className="testimonials-role">Founder & CEO of LastSwab</h3>
            </div>
            <img  alt=""className="testimonials-image image-right" alt="tesimonial image" src={UrsusImg}/>
        </div>
      </div>
    );
  }
  
  export default Testimonials;