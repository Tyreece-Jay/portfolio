import React from 'react';
import styles from './skills.module.css'

export default function Skills() {
  return <div className={styles.skills}>
    <h4>Constantly Curious</h4>
    <h3 className={styles.title}>PROFESSIONAL SKILLS</h3>
    <div className={styles.content}>
      <div className={styles.frontend}>
        <div className={styles.react}><h4>React</h4></div>
          <div className={styles.html}><h4>HTML</h4></div>
          <div className={styles.css}><h4>CSS</h4></div>
        <div className={styles.ts}><h4>TypeScript/JavaScript</h4></div>
        <div className={styles.ui}><h4>UI/UX</h4></div>
      </div>
      <div>
        <div><h4>C#</h4></div>
        <div><h4>SQL</h4></div>
        <div><h4>.NET</h4></div>
      </div>
    </div>
  </div>;
}