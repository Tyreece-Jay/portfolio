import React from 'react';
import styles from './experience.module.css'

const FDB = require('../../images/fdb.jpg');
const University = require('../../images/university.png');

export default function Experience() {
  return <section className={styles.experience}>
    <h2>MY WORK</h2>
      <div className={styles.fdbContent}>
        <div className={styles.contentText}>
          <span>
            <h4>First Databank</h4>
            <h4 className={styles.occupation}>- Software Developer</h4>
          </span>
          <p>SEPTEMBER 2018 - PRESENT</p>
          <ul>
            <li>Improved the AnalyseRx solution as part of a team during its early stages, which helped produce a ~300% increase in its customer base.</li>
            <li>Solely designed and developed a dashboard to monitor certain metrics to indicate the health of the AnalyseRx solution; this provided ~5% increase in development efficiencies.</li>
            <li>Currently part of a project to recreate an in-house system used to author medical content. This is projected to improve content authoring efficiencies by ~50%.</li>
          </ul>
        </div>
        <div className={styles.contentImage}>
        <img src={FDB} alt="First Databank" />
        </div>
      </div>
      <div className={styles.bottomContent}>
        <img src={University} alt="University of Exeter" />
        <div>
          <h4>The University of Exeter </h4>
          <h4 className={styles.occupation}>- BSC, Digital & Technology Solutions with proficiency in Software Engineering</h4>
          <p>SEPTEMBER 2018 - MAY 2022</p>
          <ul aria-label='education-text'>
            <li>
              Throughout my experience at the University of Exeter I developed tremendously in many different areas from industry knowledge to interpersonal skills whilst also specialising in software engineering.
            </li>
          </ul>
        </div>
    </div>
  </section>
}