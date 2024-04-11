import React from 'react'
import styles from './about.module.css'
import { motion } from 'framer-motion'

export default function About() {
  return <section className={styles.about}>
    <h2>ABOUT ME</h2>
    <div className={styles.content}>
      <p>Constantly sharpening my knowledge as a full-stack developer whilst having a real passion for UI/UX design and innovation. My curios and inquisitive mindset translates extremely well to software engineering and has allowed me to become the proficient software developer I am today. Well versed in TypeScript, React, C#, .NetCore, whilst also having limited knowledge in many more.</p>
    </div>
    <div className={styles.content}>
    <p>Something short and sweet</p>
    </div>
    <motion.button
    className={styles.button}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    Request my CV</motion.button>
  </section>
}
