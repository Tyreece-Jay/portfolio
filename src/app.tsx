import './app.styles.css';
import Skills from './components/Skills';
import React from 'react';
import Icons from './components/Icons';

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
        <div className="About" >
        <h3 className="About-header">ABOUT</h3>
          <p className="About-text" aria-label='about text'>Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.</p>
          <Icons/>
        </div>
        <Skills/>
      </body>
      <footer>
        Copyright © 2022 Tyreece Simpson - All Rights Reserved.
      </footer>
    </div>
  );
}
