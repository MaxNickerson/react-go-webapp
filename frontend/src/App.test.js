// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Realtime Chat App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Realtime Chat App/i);
  expect(headerElement).toBeInTheDocument();
});
