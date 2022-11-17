import React from 'react';
import Icons from './components/icons';
import { write } from './components/typewriter';
import './styles/header.styles.css'

const { Gradient } = require('./components/gradient.js');
const gradient = new Gradient()
gradient.initGradient('#gradient-canvas')

const Downarrow = require('../images/icons8-expand-arrow-96.png');
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

write();

function scroll() {
  document.documentElement.scrollTop = window.innerHeight;
}

export default function Header() {
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
      <img src={Downarrow} alt="Down Arrow" className="down-arrow" onClick={() => scroll()} />
    </div>
  </div>;
}
