import React from 'react';
import './LandingHero.scss';
import ApplicationFormPopup from '../ApplicationButton/ApplicationButton';

import "animate.css/animate.min.css";

//Animations component
import ScrollAnimation from 'react-animate-on-scroll';



function LandingHero() {
    return (
      <div className="landing-hero">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 className="landing-hero-h1">Data-driven marketing experts.</h1>
            <h1 className="landing-hero-h1">We bring your projects to <span className="semi-bold">life.</span></h1>
          </ScrollAnimation>
            <ApplicationFormPopup/>
      </div>
    );
  }
  
  export default LandingHero;