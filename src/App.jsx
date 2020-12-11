import React from 'react';

//Styles
import './App.css';
//Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';



const App = () => {

  return (
    <React.Fragment>
      <Header />
      <section id="main-section">
        <Main />
      </section>
      <section id="about-me" className="mr-top-4rm">
        <AboutMe />
      </section>
      {/* <section id="projects" className="mr-top-4rm">
        <Projects />
      </section> */}
      <section id="skills" className="mr-top-4rm">
        <Skills />
      </section>
      <section id="footer" className="mr-top-4rm">
        <Footer />
      </section>
    </React.Fragment>
  )
}

export default App;
