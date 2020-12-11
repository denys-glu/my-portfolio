import React from 'react';
//Styles
import './Skills.styles.css';

//Components
import TagCloud from '../../utilities/TagCloud/TagCloud';

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="heading-line"></div>
            <h3>Skills</h3>
            <h6 className="text-secondary uppercase">Some skills that I've gained</h6>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <TagCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills


//TODO: fix responsivnes of circels 