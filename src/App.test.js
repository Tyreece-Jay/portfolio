import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders', () => {
  test('name', () => {
    render(<App />);
    const name = screen.getByText("TYREECE SIMPSON");
    expect(name).toBeInTheDocument();
  });
  
  test('headline', () => {
    render(<App />);
    const partOne = screen.getByText("Full-Stack Software Engineer");
    const partTwo = screen.getByText("Front-End Specialist");
    expect(partOne).toBeInTheDocument();
    expect(partTwo).toBeInTheDocument();
  });
  
  test('down arrow', () => {
    render(<App />);
    const downArrow = screen.getByAltText("down arrow");
    expect(downArrow).toBeInTheDocument();
  });
  
  test('about text', () => {
    render(<App />);
    const aboutText = screen.getByLabelText("about text");
    expect(aboutText).toBeInTheDocument();
  });
  
  test('skills title', () => {
    render(<App />);
    const skillsTitle = screen.getByText("PROFESSIONAL SKILLS");
    expect(skillsTitle).toBeInTheDocument();
  });
  
  test('footer text', () => {
    render(<App />);
    const footerText = screen.getByText("Copyright © 2022 Tyreece Simpson - All Rights Reserved.");
    expect(footerText).toBeInTheDocument();
  });
});