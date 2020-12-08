import React from 'react';

import Me from '../../assets/images/me_250.png';

//Styles
import './Main.styles.css';

export default function MediaCard() {

  return (
    <React.Fragment>
      <div className="container main">
        <div className="row ">
          <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-img-top">
                <img src={Me} width="200" alt="author" />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title">Denys Glukhovskyi</h3>
                <p className="card-text orange-text">Fullstack Developer</p>
                <h5 className="red-text social-network heading">Social networks:</h5>
                <div className="row social-network">
                  <div className="col-2"><i className="fab fa-linkedin-in"></i></div>
                  <div className="col-2"><i className="fab fa-github-square"></i></div>
                  <div className="col-2"><i className="fab fa-aws"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}