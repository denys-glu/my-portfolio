import React from 'react';
import { ThemeProvider } from 'styled-components';
//Styles
import './main.css';
// import { GlobalStyles } from './utilities/Themes/global';

//Theme
// import { darkTheme } from './utilities/Themes/theme';


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
      {/* <ThemeProvider theme={}> */}
      {/* <GlobalStyles /> */}
        <Header />
        <section id="main-section">
          <Main />
        </section>
        <section id="about-me" className="pr-top-4rm">
          <AboutMe />
        </section>
        <section id="projects" className="pr-top-4rm">
          <Projects />
        </section>
        <section id="skills" className="pr-top-4rm">
          <Skills />
        </section>
        <section id="footer" className="pr-top-4rm">
          <Footer />
        </section>
      {/* </ThemeProvider> */}
    </React.Fragment>
  )
}

export default App;
