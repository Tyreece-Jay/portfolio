import React from 'react';

const Github = require('../images/github.png');
const LinkedIn = require('../images/linkedin.png');

export default function Icons() {
  return <div className='Icons'>
    <a href="https://linkedin.com/in/tyreece-simpson-287912160" className="Linkedin" aria-label='linkedin link'><img src={LinkedIn} alt="LinkedIn" /></a>
    <a href="https://github.com/Tyreece-Jay" className="Github" aria-label='github link'><img src={Github} alt="GitHub" /></a>
  </div>;
}
