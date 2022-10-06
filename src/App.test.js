import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const name = screen.getByText("TYREECE SIMPSON");
  expect(name).toBeInTheDocument();
});

test('renders headline', () => {
  render(<App />);
  const partOne = screen.getByText("Full-Stack Software Engineer");
  const partTwo = screen.getByText("Front-End Specialist");
  expect(partOne).toBeInTheDocument();
  expect(partTwo).toBeInTheDocument();
});

test('renders down arrow', () => {
  render(<App />);
  const downArrow = screen.getByAltText("down arrow");
  expect(downArrow).toBeInTheDocument();
});

test('renders about text', () => {
  render(<App />);
  const aboutText = screen.getByLabelText("about text");
  expect(aboutText).toBeInTheDocument();
});

test('renders skills title', () => {
  render(<App />);
  const skillsTitle = screen.getByText("PROFESSIONAL SKILLS");
  expect(skillsTitle).toBeInTheDocument();
});

test('renders skills', () => {
  render(<App />);
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("TypeScript")).toBeInTheDocument();
  expect(screen.getByText("HTML & CSS")).toBeInTheDocument();
  expect(screen.getByText("C#")).toBeInTheDocument();
  expect(screen.getByText("SQL")).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  const footerText = screen.getByText("Copyright © 2022 Tyreece Simpson - All Rights Reserved.");
  expect(footerText).toBeInTheDocument();
});
