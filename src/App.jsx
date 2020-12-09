import React from 'react';

//Styles
import './App.css';
//Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';



const App = () => {

  return (
    <React.Fragment>
      <Header />
      <section id="main-section">
        <Main />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
    </React.Fragment>
  )
}

export default App;
