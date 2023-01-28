import React from 'react';
import './styles/contact.styles.css'

export default function Contact() {
  return <div className="contact">
    <h4 className="contact-headline">Don’t Be A Stranger</h4>
    <h3 className="contact-title">GET IN TOUCH</h3>
    <span className='contact-button' aria-label='Contact' onClick={() => window.open("mailto:tyreece.jay@gmail.com")}>
      <i className="fa-solid fa-envelope fa-3x transparent-background" ></i>
      <h4>tyreece.jay@gmail.com</h4>
    </span>
  </div>;
}