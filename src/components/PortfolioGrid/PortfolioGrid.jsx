import React from 'react';
import './PortfolioGrid.scss';
import PortfolioApplicationButton from './components/PortfolioApplicationButton';
import LastSwabImage from './lastswab-image.png';
import OutleryImage from './outlery-image.JPG';

//Animations component
import ScrollAnimation from 'react-animate-on-scroll';

function PorfolioGrid() {
    return (
      <div className="portfolio-grid">
        <div className="portfolio-text-box">
        <div className="what-green-heading">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <h1 className="green-heading-text">Crowdfunding portfolio</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="slideInLeft" >
              <div className="green-heading-line"></div>
            </ScrollAnimation>
        </div>

            <h1 className="what-h1">Have a look at our work </h1>
            <p className="what-p">We’re proud of our campaigns. They all started with an idea that we helped bring to life. </p>
            <p className="what-p">Here is a selection of the projects we’ve worked with.</p>
          </div>

          <div className="lastswab-card project-card">
              <img src={LastSwabImage} className="project-card-image"/>
            <div className="project-card-heading">LastSwab</div>
            <div className="project-card-subheading">The Reusable Cotton Swab</div>
            <div className="project-card-amount">€1,015,010+ Raised</div>
          </div>
          <div className="outlery-card project-card">
            <img src={OutleryImage} className="project-card-image"/>
              <div className="project-card-heading">Outlery</div>
              <div className="project-card-subheading">Pocket-Sized Reusable Cutlery For On-The-Go</div>
              <div className="project-card-amount">€1,381,744+ Raised</div>
            </div>

          <PortfolioApplicationButton/>
      </div>

    );
  }
  
  export default PorfolioGrid;