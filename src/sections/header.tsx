import React, { useEffect } from 'react';
import Icons from './components/icons';
import { write } from './components/typewriter';
import './styles/header.styles.css'
import { Gradient } from './components/gradient.js';
const Downarrow = require('../images/icons8-expand-arrow-96.png');

function scrollTop() {
  document.documentElement.scrollTop = window.innerHeight;
}

export default function Header() {
  useEffect(() => {
    const phrases = ["Full-Stack Software Engineer", "Front-End Specialist"];
    const element = document.getElementById("typewriter");
    const gradient: any = new Gradient();
    
    gradient.initGradient("#gradient-canvas");
    write(phrases, element!)
  }, []);

  return <div className='header'>
    <canvas id="gradient-canvas" data-transition-in />
    <div className="header-content">
      <Icons />
      <div>
        <h1>
          TYREECE SIMPSON
        </h1>
        <h2><span aria-label='profession' id='typewriter'></span><span className='cursor'></span></h2>
      </div>
      <img src={Downarrow} alt="Down Arrow" className="down-arrow" onClick={() => scrollTop()} />
    </div>
  </div>
}
