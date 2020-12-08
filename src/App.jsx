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
      <section className="main-section">
      <Main />

      </section>

    </React.Fragment>
  )
}

export default App;
