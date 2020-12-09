import React from 'react'

//Styles
import './Circle.styles.css';

function calculateFillment(percent) {
  const max = 304.844;
  return max - (max * percent / 100) + ""
}

const Circle = ({ percent, title }) => {
  return (
    <React.Fragment>
      <div id="circle">
        <div className="radial-prog-area margin-b-30">
          <div className="radial-progress" data-prog-percent={`.${percent}`} style={{ position: "relative" }}>
            <div></div>
            <h6 className="progress-title">{title}</h6>
            <svg viewBox="0 0 100 100" style={{ display: "block", width: "100%" }}>
              <path d={`M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97`} stroke="#eee" strokeWidth="1" fillOpacity="0"></path>
              <path d={`M 50,50 m 0,-48.5 a 48.5,48.5 0 1 1 0,97 a 48.5,48.5 0 1 1 0,-97`} stroke="rgb(253,173,1)" strokeWidth="2.999784" fillOpacity="0" style={{ strokeDasharray: "304.844, 304.844", strokeDashoffset: calculateFillment(percent) }}></path>
            </svg>
            <div className="progressbar-text" style={{ position: "absolute", left: "50%", top: "50%", padding: "0px", margin: "0px", transform: "translate(-50%, -50%)", color: "rgb(170, 170, 170)" }}>{percent}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Circle
