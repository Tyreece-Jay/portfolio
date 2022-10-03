import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const name = screen.getByText("TYREECE SIMPSON");
  expect(name).toBeInTheDocument();
});

test('renders headline', () => {
  render(<App />);
  const headline = screen.getByText("Full-Stack Software Engineer | Front-End Specialist");
  expect(headline).toBeInTheDocument();
});

test('renders down arrow', () => {
  render(<App />);
  const downArrow = screen.getByAltText("down arrow");
  expect(downArrow).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  const footerText = screen.getByText("Copyright © 2022 Tyreece Simpson - All Rights Reserved.");
  expect(footerText).toBeInTheDocument();
});
