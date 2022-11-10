import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';
import { SkillPercentage } from '../types/skillpercentage';

export const page = {
    async render() {
        render(<App />)
    },

    get linkedinlink() { return elements.label("linkedin-link") },
    get githublink() { return elements.label("github-link") },
    get emaillink() { return elements.label("email-link") },
    get image() { return elements.alt("Tyreece Simpson") },
    get contactbutton() { return elements.label("contact") },
    get contactemail() { return elements.text("tyreece.jay@gmail.com") },
    get footertext() { return elements.text(`© Tyreece Simpson, ${new Date().getFullYear()}`) },

    headline(text: string) {return elements.text(text)},
    title(text: string) {return elements.text(text)},
    icon(text: string) {return elements.alt(text)},
    skillname(text: string) {return elements.text(text)},
    skillpercentage(percentage: SkillPercentage) {return elements.text(`${percentage.toString()}%`)},
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