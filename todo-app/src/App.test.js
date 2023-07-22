import { render, screen } from '@testing-library/react';
import App from './App';

// To test list heading
test('display today tasks', () => {
  render(<App />);
  const displayElement = screen.getByText(/Today Tasks/i);
  expect(displayElement).toBeInTheDocument();
});
