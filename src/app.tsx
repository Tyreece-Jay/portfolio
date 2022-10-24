import './app.styles.css';
import About from './components/about';
import Skills from './components/skills';
import EducationAndExperience from './components/educationandexperience';
import React from 'react';

const Downarrow = require('./images/icons8-expand-arrow-96.png');

export default function App() {
  return (
    <div>
      <header className="App-header">
        <h1>
          TYREECE SIMPSON
        </h1>
        <div className='Headlines'>
          <h2>
            Full-Stack Software Engineer
          </h2>
          <h2>
            Front-End Specialist
          </h2>
        </div>
        <img src={Downarrow} alt="down arrow" className="Down-arrow" />
      </header>
      <body>
        <About />
        <Skills />
        <EducationAndExperience />
      </body>
      <footer>
        Copyright © 2022 Tyreece Simpson - All Rights Reserved.
      </footer>
    </div>
  );
}