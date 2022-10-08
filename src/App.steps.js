import { render, screen } from '@testing-library/react';
import App from './App';

export function name() {
  render(<App />);

  const name = screen.getByText("TYREECE SIMPSON"); 
  expect(name).toBeInTheDocument();
};

export function headline() {
  render(<App />);

  const partOne = screen.getByText("Full-Stack Software Engineer");
  const partTwo = screen.getByText("Front-End Specialist");
  expect(partOne).toBeInTheDocument();
  expect(partTwo).toBeInTheDocument();
};

export function down_arrow() {
  render(<App />);

  const downArrow = screen.getByAltText("down arrow");
  expect(downArrow).toBeInTheDocument();
};

export function about_text() {
  render(<App />);

  const aboutText = screen.getByLabelText("about text");
  expect(aboutText).toBeInTheDocument();
};

export function skills_title() {
  render(<App />);

  const skillsTitle = screen.getByText("PROFESSIONAL SKILLS");
  expect(skillsTitle).toBeInTheDocument();
};

export function footer_text() {
  render(<App />);

  const footerText = screen.getByText("Copyright © 2022 Tyreece Simpson - All Rights Reserved.");
  expect(footerText).toBeInTheDocument();
};