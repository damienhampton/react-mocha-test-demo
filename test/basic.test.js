import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import App from '../src/App.js';

afterEach(cleanup);

test('App Component', () => {
  render(<App/>);
  expect(screen.queryByText('Hello React2')).toBeTruthy();
})