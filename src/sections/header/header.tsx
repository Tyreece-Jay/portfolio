import React, { useEffect } from 'react';
import Icons from './icons';
import { write } from './components/typewriter';
import './header.styles.css'

export default function Header() {
  useEffect(() => {
    const phrases = ["Full-Stack Software Engineer", "Front-End Specialist"];
    const element = document.getElementById("typewriter");

    write(phrases, element!)
  }, []);

  return <div className='header'>
    <div className="header-content">
      <Icons />
      <div className="header-text">
        <h1>TYREECE SIMPSON</h1>
        <h2><span id='typewriter' className="transparent-background"></span><span className='cursor'></span></h2>
      </div>
      <span className='button' aria-label='Down Arrow' onClick={() => window.scrollBy(0, window.innerHeight)}><i className="fa-solid fa-angle-down fa-5x transparent-background" ></i></span>
    </div>
  </div>
}
