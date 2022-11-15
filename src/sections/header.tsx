import React from 'react';
import Icons from './components/icons';

const { Gradient } = require('./components/gradient.js');
const gradient = new Gradient()
gradient.initGradient('#gradient-canvas')

const Downarrow = require('../images/icons8-expand-arrow-96.png');
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Full-Stack Software Engineer", "Front-End Specialist"];
const el = document.getElementById("typewriter");

let sleepTime = 100;
let curPhraseIndex = 0;

const write = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      if (el != null)
        el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      if (el != null)
        el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    }
    else {
      curPhraseIndex++;
    }
  }
};

write();

function scroll() {
  document.documentElement.scrollTop = window.innerHeight;
}

export default function Header() {
  return <div className='header'>
    <canvas id="gradient-canvas" data-transition-in />
    <div className="header-content">
      <Icons />
      <div>
        <h1>
          TYREECE SIMPSON
        </h1>
        <h2><span aria-label='profession' id='typewriter'></span><span className='cursor'></span></h2>
      </div>
      <img src={Downarrow} alt="Down Arrow" className="down-arrow" onClick={() => scroll()} />
    </div>
  </div>;
}
