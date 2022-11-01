import React from 'react';

const Me = require('../images/me.png');

export default function ExperienceAndEducation() {
  return <div className="Experience-and-education">
    <h3 className="Experience-and-education-headline">Never Stop Learning</h3>
    <h3 className="Experience-and-education-title">EXPERIENCE & EDUCATION</h3>
    <div className="Experience-text">
      <span className="Place">First Databank </span>
      <span className="Occupation">- Software Developer</span>
      <p>SEPTEMBER 2018 - PRESENT</p>
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
      <span className="Place">The University of Exeter </span>
      <span className="Occupation">- BSC, Digital & Technology Solutions with proficiency in Software Engineering</span>
      <p>SEPTEMBER 2018 - MAY 2022</p>
      <ul aria-label='education text'>
        <li>
          Throughout my experience at the University of Exeter I developed tremendously in many different areas from industry knowledge to interpersonal skills whilst also specialising in software engineering.
        </li>
      </ul>
    </div>
    <img src={Me} alt="Me" className="Me" />
  </div>;
}