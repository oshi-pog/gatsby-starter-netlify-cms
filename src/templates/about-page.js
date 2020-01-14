import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Helmet } from 'react-helmet';

import NavbarFixedWhite from '../components/NavbarFixedWhite/NavbarFixedWhite';
import OurMission from '../components/OurMission/OurMission';
import ApplicationSection from '../components/ApplicationSection/ApplicationSection';
import Footer from '../components/Footer/Footer';

//Styles
import '../styles/style.css'


const AboutPage = () => {
  return (
    <div className="main">
      <Helmet>
          <title>Palm Tree Digital | Kickstarter & Crowdfunding Marketing Experts | About Us</title>
          <meta name="description" content="The best Kickstarter crowdfunding and social media marketing to bring your ideas and products to the market. Palm Tree Digital is the leading crowdfunding service for your Kickstarter, Indiegogo, and E-commerce campaigns." />
          <meta name="theme-color" content="#008f68" />
          <link rel="canonical" href="https://palmtreedigitalcph.com/"></link>

          <meta property="og:locale" content="en_GB"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="Palm Tree Digital | Kickstarter & Crowdfunding Marketing Experts"></meta>
          <meta property="og:description" content="The best Kickstarter crowdfunding and social media marketing to bring your ideas and products to the market. Palm Tree Digital is the leading crowdfunding service for your Kickstarter, Indiegogo, and E-commerce campaigns."></meta>
          <meta property="og:url" content="https://palmtreedigitalcph.com/"></meta>
          <meta property="og:site_name" content="Palm Tree Digital"></meta>

          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:description" content="The best Kickstarter crowdfunding and social media marketing to bring your ideas and products to the market. Palm Tree Digital is the leading crowdfunding service for your Kickstarter, Indiegogo, and E-commerce campaigns."></meta>
          <meta name="twitter:title" content="Palm Tree Digital | Kickstarter & Crowdfunding Marketing Experts"></meta>

          </Helmet>
          
      <NavbarFixedWhite/>
      <OurMission/>
      <ApplicationSection/>
      <Footer/>
    </div>
  )
}


export default AboutPage
