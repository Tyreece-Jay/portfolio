import React from 'react';
import styles from './skills.module.css'
import { ParallaxText } from './parallax-text';

export default function Skills() {
  return <section className={styles.skills}>
    <ParallaxText baseVelocity={2}><SkillBar skills={['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'UI', 'UX']} /></ParallaxText>
    <ParallaxText baseVelocity={-1}><SkillBar skills={['C#', '.NET', 'SQL', 'Git', 'DevOps', 'Pair Programming']} /></ParallaxText>
    <ParallaxText baseVelocity={2}><SkillBar skills={['TDD', 'DDD', 'BDD', 'And Much More...']} /></ParallaxText>
  </section>
}

function SkillBar({ skills }: { skills: string[] }) {
  return <>{skills.map(s => <>
    <span className={styles.skill}>{s}</span>
    <span>//</span>
  </>)}</>
}
