import React from 'react';
import Icons from './components/icons';

export default function About() {
  return <div className="about">
    <h4 className="about-headline">I’m An Open Book</h4>
    <h3 className="about-title">ABOUT ME</h3>
    <p className="about-text" aria-label='about-text'>Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.</p>
    <Icons />
  </div>;
}
