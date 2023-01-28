import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';
import { SkillPercentage } from '../components/skills/skillpercentage';
jest.mock('../components/header/canvas');
window.open = jest.fn();
window.scrollBy = jest.fn();

export const page = {
    async render() {
        render(<App />)
    },

    get profession() { return elements.label("profession") },
    get image() { return elements.alt("Tyreece Simpson") },
    get contactemail() { return elements.text("tyreece.jay@gmail.com") },
    get footertext() { return elements.text(`© Tyreece Simpson, ${new Date().getFullYear()}`) },

    headline(text: string) { return elements.text(text) },
    title(text: string) { return elements.text(text) },
    icon(text: string) { return elements.label(text) },
    skillname(text: string) { return elements.text(text) },
    skillpercentage(percentage: SkillPercentage) { return elements.text(`${percentage.toString()}%`) },
    skillprogress(text: string) { return elements.label(text) },
    place(text: string) { return elements.text(text) },
    dates(text: string) { return elements.text(text) },
    text(text: string) { return elements.label(text) }
}

const elements = {
    text(text: string) { return screen.getByText(text) },
    alt(text: string) { return screen.getByAltText(text) },
    label(text: string) { return screen.getByLabelText(text) }
}