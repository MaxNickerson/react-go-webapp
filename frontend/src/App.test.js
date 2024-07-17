import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Realtime Chat App header', () => {
  console.log('Starting test for Realtime Chat App header');
  render(<App />);
  const headerElement = screen.getByText(/Realtime Chat App/i);
  expect(headerElement).toBeInTheDocument();
  console.log('Test completed for Realtime Chat App header');
});