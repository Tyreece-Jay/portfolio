import React from 'react';

const Email = require('../images/email.png');

export default function Contact() {
  return <div className="contact">
    <h3 className="contact-headline">Don’t Be A Stranger</h3>
    <h3 className="contact-title">CONTACT ME</h3>
    <a href="mailto:tyreece.jay@gmail.com" aria-label='contact' className="contact-button"><img src={Email} alt="email button"/><p>tyreece.jay@gmail.com</p></a>
  </div>;
}