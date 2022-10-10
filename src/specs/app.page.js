import { render, screen } from '@testing-library/react';
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
    get downarrow() { return elements.alt("down arrow") },
    get abouttext() { return elements.label("about text") },
    get skillstitle() { return elements.text("PROFESSIONAL SKILLS") },
    get footertext() { return elements.text("Copyright © 2022 Tyreece Simpson - All Rights Reserved.") },

    skillicon(text) {return elements.alt(text)},
    skillname(text) {return elements.text(text)},
    skillprogress(text) {return elements.label(text)}
}

const elements = {
    text(text) { return screen.getByText(text)},
    alt(text) { return screen.getByAltText(text)},
    label(text) { return screen.getByLabelText(text)}
}