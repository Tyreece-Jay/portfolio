import Downarrow from './components/icons8-expand-arrow-96.png';
import Github from './components/github.png';
import Linkedin from './components/linkedin.png';
import React from './components/react.png';
import './app.css';

function App() {
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
        <div className='Icons'>
          <a href="https://linkedin.com/in/tyreece-simpson-287912160" className="Linkedin" aria-label='linkedin link'><img src={Linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/Tyreece-Jay" className="Github" aria-label='github link'><img src={Github} alt="GitHub" /></a>
        </div>
        <img src={Downarrow} alt="down arrow" className="Down-arrow" />
      </header>
      <body>
        <div>
          <p className="About-text" aria-label='about text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3 className="Skills-header">PROFESSIONAL SKILLS</h3>
          <div className="Skills">
            <img src={React} alt="react" />
            <h4>REACT</h4>
          </div>
        </div>
      </body>
      <footer>
        Copyright © 2022 Tyreece Simpson - All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;