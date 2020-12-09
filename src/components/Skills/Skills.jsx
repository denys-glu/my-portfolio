import React from 'react'


//Styles
import './Skills.styles.css';

//Components
import Circle from '../../utilities/Circle/Circle';

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="heading-line"></div>
            <h3>Skills</h3>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-3">
                <Circle title={"HTML5 & CSS3"} percent="90"/>
              </div>
              <div className="col-3">
                <Circle title={"Javascript"} percent="75"/>
              </div>
              <div className="col-3">
                <Circle title={"ReactJS"} percent="65"/>
              </div>
              <div className="col-3">
                <Circle title={"AJAX"} percent="90"/>
              </div>
              <div className="col-3">
                <Circle title={"Python"} percent="38"/>
              </div>
              <div className="col-3">
                <Circle title={"C#"} percent="35"/>
              </div>
              <div className="col-3">
                <Circle title={"Git"} percent="70"/>
              </div>
              <div className="col-3">
                <Circle title={"REST"} percent="55"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills
