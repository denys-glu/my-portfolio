import React from 'react'


//Styles
import './AboutMe.styles.css';

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="heading-line"></div>
            <h3>About Me</h3>
            <h6 className="text-secondary uppercase">Professional path</h6>
          </div>
          <div className="col-12 col-sm-8">
            <div className="row">
              <div className="col">
                <p>
                  Frontend/Fullstack developer with experience in adaptive development and counseling. At Areon Consulting in Ukraine, I introduced new designs using Sketch with support for outdated as well as current devices. During my tenure, user quantity was increased by 35% and user experience quality increased by 28%. During my time at Areon Consulting, we also introduced push notifications which utilized hybrid technology (Ionic) for mobile devices.
                </p>
                <p>
                  Most recently, I sharpened my skills in MERN, C#, and Python by earning highest honor (triple blackbelt) at Coding Dojo bootcamp in pursuit of developing higher quality products.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-7 text-right">
                <p>
                  For more details: 
                  <a href="https://docs.google.com/document/d/1oSxl8VRPQn7jSqkEDC0dTE4OqIPVkAJ851hhqVSlO6Y/export?format=pdf" className="btn btn-warning d-inline ml-2">
                    Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutMe
