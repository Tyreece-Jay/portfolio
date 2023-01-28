import React from 'react';

const Github = require('../../images/github.png');
const LinkedIn = require('../../images/linkedin.png');
const Figma = require('../../images/figma.png');

export default function Icons() {
  return <div className='icons'>
    <a href="https://linkedin.com/in/tyreece-simpson-287912160" aria-label='linkedin-link'><img src={LinkedIn} alt="LinkedIn" /></a>
    <a href="https://github.com/Tyreece-Jay" aria-label='github-link' className='middle-icon'><img src={Github} alt="GitHub" /></a>
    <a href="https://www.figma.com/@tyreece" aria-label='figma-link' ><img src={Figma} alt="Figma" /></a>
  </div>;
}
