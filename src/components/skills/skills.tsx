import React from 'react';
import styles from './skills.module.css'

const frontend = require('../../images/frontend.png');
const backend = require('../../images/backend.png');
const practices = require('../../images/practices.png');

export default function Skills() {
  return <div className={styles.skills}>
    <h4>Constantly Curious</h4>
    <h3 className={styles.title}>PROFESSIONAL SKILLS</h3>
    <div className={styles.content}>
        <h4 className={styles.subHeading}><img src={frontend} alt="Front-End" />Front-End</h4>
        <div className={styles.frontend}>
          <div className={styles.react}><h4>React</h4></div>
          <div className={styles.html}><h4>HTML</h4></div>
          <div className={styles.css}><h4>CSS</h4></div>
          <div className={styles.ts}><h4>TypeScript/JavaScript</h4></div>
          <div className={styles.ui}><h4>UI/UX</h4></div>
        </div>
        <h4 className={styles.subHeading}><img src={backend} alt="Back-End" />Back-End</h4>
        <div className={styles.backend}>
          <div className={styles.cSharp}><h4>C#</h4></div>
          <div className={styles.dotNet}><h4>.NET</h4></div>
          <div className={styles.sql}><h4>SQL</h4></div>
        </div>
          <h4 className={styles.subHeading}><img src={practices} alt="Practices" />Practices</h4>
          <div className={styles.practices}>
            <div className={styles.tdd}><h4>TDD</h4></div>
            <div className={styles.ddd}><h4>DDD</h4></div>
            <div className={styles.bdd}><h4>BDD</h4></div>
            <div className={styles.programming}><h4>Pair Programming</h4></div>
            <div className={styles.devops}><h4>DevOps</h4></div>
          </div>
    </div>
  </div>;
}