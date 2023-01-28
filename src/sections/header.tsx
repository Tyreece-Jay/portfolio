import React, { useEffect } from 'react';
import Icons from './components/icons';
import { write } from './components/typewriter';
import './styles/header.styles.css'
import Canvas from './components/canvas';
const Downarrow = require('../images/icons8-expand-arrow-96.png');

export default function Header() {
  useEffect(() => {
    const phrases = ["Full-Stack Software Engineer", "Front-End Specialist"];
    const element = document.getElementById("typewriter");

    write(phrases, element!)
  }, []);

  return <div className='header'>
    <Canvas />
    <div className="header-content">
      <Icons />
      <div>
        <h1>
          TYREECE SIMPSON
        </h1>
        <h2><span aria-label='profession' id='typewriter'></span><span className='cursor'></span></h2>
      </div>
      <img src={Downarrow} alt="Down Arrow" className="down-arrow" onClick={() => window.scrollBy(0, window.innerHeight)} />
    </div>
  </div>
}
