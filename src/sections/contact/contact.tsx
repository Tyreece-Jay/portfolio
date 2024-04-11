import React from 'react';
import styles from './contact.module.css'

export default function Contact() {
  return <div className={styles.contact}>
    <h4>Don’t Be A Stranger</h4>
    <h3>GET IN TOUCH</h3>
    <span className={styles.button} aria-label='Contact' onClick={() => window.open("mailto:tyreece.jay@gmail.com")}>
      <i className={`fa-solid fa-envelope fa-3x`} ></i>
      <h4>tyreece.jay@gmail.com</h4>
    </span>
  </div>;
}