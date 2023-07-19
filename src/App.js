import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/hero';
import Skills from './components/skills';
import Profile from './components/profile';

import "./styles/dark.css"
import Projects from './components/projects';
import Footer from './components/footer';
import "./styles/responsive.css"
import { useState } from 'react';

function App(props) {
  const {theme} = props

  
  return (
    <div className={`App ${theme}`}>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
