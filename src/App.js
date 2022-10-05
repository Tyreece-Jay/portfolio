import './App.css';
import downarrow from './icons8-expand-arrow-96.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          TYREECE SIMPSON
        </h1>
        <h3>
          Full-Stack Software Engineer
        </h3>
        <h3>
          Front-End Specialist
        </h3>
        <img src={downarrow} alt="down arrow" />
      </header>
      <body>
        <div className="About-text">
          <p aria-label='about text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="App-header">
          <h4>PROFESSIONAL SKILLS</h4>
        </div>
      </body>
      <footer>Copyright © 2022 Tyreece Simpson - All Rights Reserved.</footer>
    </div>
  );
}

export default App;
