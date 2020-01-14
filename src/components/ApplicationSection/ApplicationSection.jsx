import React from 'react';
import './ApplicationSection.scss';
import ApplicationButton from '../ApplicationButton/ApplicationButton'

//Animations component
// import ScrollAnimation from 'react-animate-on-scroll';



function ApplicationSection() {
    return (
      <div className="application-grid">
        <div className="application-text-box">
        {/* <ScrollAnimation animateIn="slideInUp" > */}
          <h1 className="what-h1">Learn More About Our Program</h1> 
        {/* </ScrollAnimation> */}
        </div>
        {/* <ScrollAnimation animateIn="slideInUp" > */}
        <ApplicationButton/>
        {/* </ScrollAnimation> */}
    </div>
    );
  }
  
  export default ApplicationSection;