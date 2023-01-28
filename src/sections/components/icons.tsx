import React from 'react';

export default function Icons() {
  return <div className='icons'>
    <span className='button' aria-label='LinkedIn' onClick={() => window.open("https://linkedin.com/in/tyreece-simpson-287912160")}><i className="fa-brands fa-linkedin fa-3x transparent-background" ></i></span>
    <span className='button' aria-label='Figma' onClick={() => window.open("https://www.figma.com/@tyreece")}><i className="fa-brands fa-figma fa-3x transparent-background" ></i></span>
    <span className='button' aria-label='GitHub' onClick={() => window.open("https://github.com/Tyreece-Jay")}><i className="fa-brands fa-github fa-3x transparent-background" ></i></span>
  </div>;
}
