import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const name = screen.getByText("Tyreece Simpson");
  expect(name).toBeInTheDocument();
});
