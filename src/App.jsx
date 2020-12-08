import React from 'react';

//Styles
import './App.css';
//Components
import Main from './components/Main/Main';
import Header from './components/Header/Header';



const App = () => {

  return (
    <React.Fragment>
      <Header />
      <section id="main-section">
        <Main />
      </section>
      <section id="about-me">

      </section>
    </React.Fragment>
  )
}

export default App;
