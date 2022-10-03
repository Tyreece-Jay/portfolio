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
        Full-Stack Software Engineer | Front-End Specialist
        </h3>
        <img src={downarrow} alt="down arrow" />
      </header>
      <footer>Copyright © 2022 Tyreece Simpson - All Rights Reserved.</footer>
    </div>
  );
}

export default App;
