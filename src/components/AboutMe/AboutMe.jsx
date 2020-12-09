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
                  Frontend/Fullstack developer with experience in adaptive development and counseling as a frontend developer at Areon Consulting in Ukraine, where I introduced new designs using Sketch with support for outdated as well as current devices that increased users quantity by 35% and user experience quality by 28%. During my time at Areon Consulting, we also introduced push notifications using hybrid technology (Ionic) for mobile devices.
                </p>
                <p>
                  Most recently, I sharpened my skills in MERN, C#, and Python at Coding Dojo in pursuit of developing higher quality products.
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
