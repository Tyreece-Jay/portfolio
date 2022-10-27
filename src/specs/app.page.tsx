import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';

export const page = {
    async render() {
        render(<App />)
    },

    get headerheadline() { return elements.text("TYREECE SIMPSON") },
    get headertitle1() { return elements.text("Full-Stack Software Engineer") },
    get headertitle2() { return elements.text("Front-End Specialist") },
    get linkedin() { return elements.alt("LinkedIn") },
    get linkedinlink() { return elements.label("linkedin link") },
    get github() { return elements.alt("GitHub") },
    get githublink() { return elements.label("github link") },
    get email() { return elements.alt("Email") },
    get downarrow() { return elements.alt("down arrow") },
    get aboutheadline() { return elements.text("I’m An Open Book") },
    get abouttitle() { return elements.text("ABOUT") },
    get skillsheadline() { return elements.text("Knowledge Is Everything") },
    get skillstitle() { return elements.text("PROFESSIONAL SKILLS") },
    get experienceandeducationtitle() { return elements.text("EXPERIENCE & EDUCATION") },
    get contacttitle() { return elements.text("CONTACT ME") },
    get contactbutton() { return elements.label("contact") },
    get contactemail() { return elements.text("tyreece.jay@gmail.com") },
    get footertext() { return elements.text("Copyright © 2022 Tyreece Simpson - All Rights Reserved.") },

    skillname(text: string) {return elements.text(text)},
    skillprogress(text: string) {return elements.label(text)},
    place(text: string) { return elements.text(text) },
    dates(text: string) { return elements.text(text) },
    text(text: string) { return elements.label(text) },
}

const elements = {
    text(text: string) { return screen.getByText(text)},
    alt(text: string) { return screen.getByAltText(text)},
    label(text: string) { return screen.getByLabelText(text)}
}