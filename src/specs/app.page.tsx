import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';
jest.mock('../components/header/canvas');
window.open = jest.fn();
window.scrollBy = jest.fn();

export const page = {
    async render() {
        render(<App />)
    },

    get profession() { return elements.label("profession") },
    get contactemail() { return elements.text("tyreece.jay@gmail.com") },
    get footertext() { return elements.text(`© Tyreece Simpson, ${new Date().getFullYear()}`) },

    headline(text: string) { return elements.text(text) },
    title(text: string) { return elements.text(text) },
    image(text: string) { return elements.alt(text) },
    icon(text: string) { return elements.label(text) },
    place(text: string) { return elements.text(text) },
    dates(text: string) { return elements.text(text) },
    text_label(text: string) { return elements.label(text) },
    skill(text: string) { return elements.text(text) },
    text(text: string) { return elements.text(text) }
}

const elements = {
    text(text: string) { return screen.getByText(text) },
    alt(text: string) { return screen.getByAltText(text) },
    label(text: string) { return screen.getByLabelText(text) }
}