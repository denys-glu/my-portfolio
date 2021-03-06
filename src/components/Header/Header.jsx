import React from 'react'


//Styles
import './Header.styles.css';

const Header = () => {

  const changeTheme = e => {
    console.log(e)
  }

  return (
    <React.Fragment>
      <nav id="navBar" className="navbar fixed-top navbar-expand-lg navbar-light yellow-bkg">
        <a className="navbar-brand" href="#main-section">To Top</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myMenu" aria-controls="myMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about-me">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            {/* <li className="nav-item">
              <div className="theme-block" onClick={e => changeTheme(e)}>
                <i className="fas fa-lightbulb"></i>
                <i className="far fa-lightbulb"></i>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
