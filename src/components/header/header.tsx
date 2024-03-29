import React, { useEffect } from 'react';
import Icons from './icons';
import { write } from './typewriter';
import './header.styles.css'
import Canvas from './canvas';

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
      <div className="transparent-background">
        <h1>
          TYREECE SIMPSON
        </h1>
        <h2><span aria-label='profession' id='typewriter' className="transparent-background"></span><span className='cursor'></span></h2>
      </div>
      <span className='button' aria-label='Down Arrow' onClick={() => window.scrollBy(0, window.innerHeight)}><i className="fa-solid fa-angle-down fa-5x transparent-background" ></i></span>
    </div>
  </div>
}
