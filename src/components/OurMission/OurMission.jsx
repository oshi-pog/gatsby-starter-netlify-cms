import React from 'react';
import './OurMission.scss';
import joshuaImg from './img/joshua-founder.png'
import madsImg from './img/mads-founder.png'
import mortenImg from './img/morten-founder.png'


//Animations component
// import ScrollAnimation from 'react-animate-on-scroll';

function OurMission() {
    return (
      <div className="our-mission">
        <div className="our-mission-text-box">

          <div className="what-green-heading">
          {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
              <h1 className="green-heading-text">Our Mission</h1>
            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation animateIn="slideInLeft" > */}
              <div className="green-heading-line"></div>
            {/* </ScrollAnimation> */}
          </div>


          <h1 className="what-h1">We’re Palm Tree Digital. We work for your success.</h1>
          <p className="what-p">We combine modern software and dedicated service to bring performance and efficiency to crowdfunding. Our reach is global, combining our experience with cutting-edge technology and analytics to find the best backers for the best products. Our friendly team prides itself on working transparently, and is always happy to help.</p>
    
        </div>

        <div className="our-team-text-box">

          <div className="what-green-heading">
          {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
              <h1 className="green-heading-text">Our Team</h1>
            {/* </ScrollAnimation> */}

            {/* <ScrollAnimation animateIn="slideInLeft" > */}
              <div className="green-heading-line"></div>
            {/* </ScrollAnimation> */}
          </div>
          <p className="what-p">We are an international team, based in the heart of Copenhagen, Denmark.</p>
    
        </div>
        <div className="founders-flex">
            <div className="founder founder-1">
            <img  className="founder-img" alt="founder" src={joshuaImg}/>
                <h3>Joshua Kaplan</h3>
                <h3 className="founder-role">Co-Founder</h3>
            </div>
            <div className="founder founder-2">
            <img  className="founder-img" alt="founder" src={madsImg}/>
            <h3>Mads Birkholm Hansen</h3>
            <h3 className="founder-role">Co-Founder</h3>
            </div>
            <div className="founder founder-3">
            <img  className="founder-img" alt="founder" src={mortenImg}/>
            <h3>Morten Jelle</h3>
            <h3 className="founder-role">Backend Developer</h3>
            </div>
        </div>
      </div>
    );
  }
  
  export default OurMission;