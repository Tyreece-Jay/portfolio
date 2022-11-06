import React from 'react';

const Downarrow = require('../images/icons8-expand-arrow-96.png');

export default function Header() {
  return <header className="header">
    <h1>
      TYREECE SIMPSON
    </h1>
    <div className='header-title'>
      <h2>
        Full-Stack Software Engineer
      </h2>
      <h2>
        Front-End Specialist
      </h2>
    </div>
    <img src={Downarrow} alt="Down Arrow" className="down-arrow" />
  </header>;
}
