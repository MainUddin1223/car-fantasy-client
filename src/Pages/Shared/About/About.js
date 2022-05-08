import React from 'react';
import './About.css'

const About = () => {
    return (
            <div className='about-section'>
          <div className="container">
          <h1 className='about-header'>About Us</h1>
            <div className='about-container'>
                <div className='about'>
                    <h5>Purpose</h5>
                    <p>This website is built to handle product.Via this website anyone can handle an inventory</p>
                    <p>Flexible UI and UX</p>
                </div>
                <div className='about'>
                    <h5>Technology</h5>
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                </div>
                <div className='about'>
                    <h5>Support</h5>
                    <p>Programming Hero</p>
                    <p>stackoverflow.com</p>
                    <p>Documentation</p>
                </div>

                <div className='about'>
                    <h5>Address</h5>
                    <p>Basundara</p>
                    <p>Dhaka</p>
                    <p>Bangladesh</p>
                    <p>contact:01121212121</p>
                </div>

            </div>
          </div>
        </div>
    );
};

export default About;