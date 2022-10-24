import React from 'react';

const Email = require('../images/email.png');

export default function Contact() {
  return <div className="Contact">
    <h3 className="Contact-title">CONTACT ME</h3>
    <a href="" aria-label='contact' className="Contact-button"><img src={Email} /><p>tyreece.jay@gmail.com</p></a>
  </div>;
}
