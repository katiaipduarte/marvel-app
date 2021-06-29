import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo element', () => {
  render(<App />);
  const logoElement = screen.getByAltText('marvel logo');
  expect(logoElement).toBeInTheDocument();
});
