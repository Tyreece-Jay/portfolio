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
          <p className="About-text" aria-label='about text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
