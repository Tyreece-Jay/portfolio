import React from 'react';
import Icons from './components/icons';

const {Gradient} = require('./components/gradient.js');
const gradient = new Gradient()
gradient.initGradient('#gradient-canvas')

const Downarrow = require('../images/icons8-expand-arrow-96.png');

export default function Header() {
  return <div className='header'>
  <canvas id="gradient-canvas" data-transition-in />
  <div className="header-content">
    <Icons />
    <div>
      <h1>
        TYREECE SIMPSON
      </h1>
      <h2>
        Full-Stack Software Engineer
      </h2>
      <h2>
        Front-End Specialist
      </h2>
    </div>
    <img src={Downarrow} alt="Down Arrow" className="down-arrow" />
  </div>
  </div>;
}
