import React from 'react';
import './about.styles.css'

const Me = require('../../images/me.png');

export default function About() {
  return <div className="about">
    <img className='me' src={Me} alt="Tyreece Simpson" />
    <div>
      <h4>I’m An Open Book</h4>
      <h3>ABOUT ME</h3>
      <p className="about-text" aria-label='about-text'>Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.</p>
    </div>
  </div>;
}
