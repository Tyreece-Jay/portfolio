import React from 'react';
import Icons from './components/icons';
import { write } from './components/typewriter';
import '../styles.css'

const { Gradient } = require('./components/gradient.js');
const gradient = new Gradient()
gradient.initGradient('#gradient-canvas')

const Downarrow = require('../images/icons8-expand-arrow-96.png');

write();

export default function Header() {
  return <div className='header'>
    <canvas id="gradient-canvas" data-transition-in />
    <div className="header-content">
      <Icons />
      <div>
        <h1>
          TYREECE SIMPSON
        </h1>
        <h2 aria-label='profession'>
        <span id='typewriter'></span><span className='cursor'></span> 
        </h2>
      </div>
      <img src={Downarrow} alt="Down Arrow" className="down-arrow" />
    </div>
  </div>;
}
