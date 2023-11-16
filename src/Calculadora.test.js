import { render, screen } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom'
import Calculadora from './Calculadora';

test('renders learn react link', () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
