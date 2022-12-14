import React from 'react';

const Github = require('../../images/github.png');
const LinkedIn = require('../../images/linkedin.png');
const Email = require('../../images/email.png');

export default function Icons() {
  return <div className='icons'>
    <a href="https://linkedin.com/in/tyreece-simpson-287912160" aria-label='linkedin-link'><img src={LinkedIn} alt="LinkedIn" /></a>
    <a href="https://github.com/Tyreece-Jay" aria-label='github-link' className='middle-icon'><img src={Github} alt="GitHub" /></a>
    <a href="mailto:tyreece.jay@gmail.com" aria-label='email-link' ><img src={Email} alt="Email" /></a>
  </div>;
}
