// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with Smartphones text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Smartphones/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section with Pre-Order Now link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pre-Order Now/i);
  expect(linkElement).toBeInTheDocument();
});
