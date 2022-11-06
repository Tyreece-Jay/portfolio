import React from 'react';

const Email = require('../images/email.png');

export default function Contact() {
  return <div className="contact">
    <h4 className="contact-headline">Don’t Be A Stranger</h4>
    <h3 className="contact-title">CONTACT ME</h3>
    <a href="mailto:tyreece.jay@gmail.com" aria-label='contact' className="contact-button"><img src={Email} alt="Contact"/><h4>tyreece.jay@gmail.com</h4></a>
  </div>;
}