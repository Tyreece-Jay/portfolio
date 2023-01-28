import React from 'react';
import './styles/contact.styles.css'

const Email = require('../images/email.png');

export default function Contact() {
  return <div className="contact">
    <h4 className="contact-headline">Don’t Be A Stranger</h4>
    <h3 className="contact-title">GET IN TOUCH</h3>
    <a href="mailto:tyreece.jay@gmail.com" aria-label='Contact' className="contact-button"><img src={Email} /><h4>tyreece.jay@gmail.com</h4></a>
  </div>;
}