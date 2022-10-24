import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';

export const page = {
    async render() {
        render(<App />)
    },

    get name() { return elements.text("TYREECE SIMPSON") },
    get headline1() { return elements.text("Full-Stack Software Engineer") },
    get headline2() { return elements.text("Front-End Specialist") },
    get linkedin() { return elements.alt("LinkedIn") },
    get linkedinlink() { return elements.label("linkedin link") },
    get github() { return elements.alt("GitHub") },
    get githublink() { return elements.label("github link") },
    get email() { return elements.alt("Email") },
    get downarrow() { return elements.alt("down arrow") },
    get abouttitle() { return elements.text("ABOUT") },
    get skillstitle() { return elements.text("PROFESSIONAL SKILLS") },
    get experienceandeducationtitle() { return elements.text("EXPERIENCE & EDUCATION") },
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