import './app.styles.css';
import Skills from './components/Skills';
import React from 'react';
import Icons from './components/Icons';

const Downarrow = require('./images/icons8-expand-arrow-96.png');

export default function App() {
  return (
    <div>
      <header className="App-header">
        <h1>
          TYREECE SIMPSON
        </h1>
        <div className='Headlines'>
          <h2>
            Full-Stack Software Engineer
          </h2>
          <h2>
            Front-End Specialist
          </h2>
        </div>
        <img src={Downarrow} alt="down arrow" className="Down-arrow" />
      </header>
      <body>
        <div className="About">
          <h3 className="About-title">ABOUT</h3>
          <p className="About-text" aria-label='about text'>Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.</p>
          <Icons />
        </div>
        <Skills />
      </body>
      <div className="Experience-and-education">
        <h3 className="Experience-and-education-title">EXPERIENCE & EDUCATION</h3>
        <div className="Experience-text">
          <p className="Place">First Databank - Software Developer</p>
          <p className="Dates">SEPTEMBER 2018 - PRESENT</p>
          <ul aria-label='experience text'>
            <li>
              Improved the AnalyseRx solution as part of a team during its early stages, which helped produce a ~300% increase in its customer base.
            </li>
            <li>
              Solely designed and developed a dashboard to monitor certain metrics to indicate the health of the AnalyseRx solution; this provided ~5% increase in development efficiencies.
            </li>
            <li>
              Currently part of a project to recreate an in-house system used to author medical content. This is projected to improve content authoring efficiencies by ~50%.
            </li>
          </ul>
        </div>
        <div className="Education-text">
          <p className="Place">The University of Exeter - BSC, Digital & Technology Solutions with proficiency in Software Engineering</p>
          <p className="Dates">SEPTEMBER 2018 - MAY 2022</p>
          <ul aria-label='education text'>
            <li>
              Throughout my experience at the University of Exeter I developed tremendously in many different areas from industry knowledge to interpersonal skills whilst also specialising in software engineering.
            </li>
          </ul>
        </div>
      </div>
      <footer>
        Copyright © 2022 Tyreece Simpson - All Rights Reserved.
      </footer>
    </div>
  );
}
