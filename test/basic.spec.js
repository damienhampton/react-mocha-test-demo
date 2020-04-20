import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { assert } from 'chai';
import App from '../src/App.js';

describe('App Component', () => {
  afterEach(() => {
    cleanup();
  })
  describe('default', () => {
    it('renders the App', () => {
      const appWrapper = render(<App/>);
       const hello = appWrapper.getByText(/Hello/);
       assert.equal(hello.innerHTML, 'Hello Dave!');
     })
   })
   describe('Damien', () => {
    it('renders the App', () => {
      const appWrapper = render(<App greeting={'Damien'}/>);
       const hello = appWrapper.getByText(/Hello/);
       assert.equal(hello.innerHTML, 'Hello Damien!');
     })
   })
   describe('Subtext default', () => {
    it('renders the App', () => {
      const appWrapper = render(<App/>);
      assert.throws(() => appWrapper.getByText(/Subtext/));
      const button = document.getElementById('subtextButton');
      fireEvent(button,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );
      const subtext = appWrapper.getByText(/Subtext/);
      assert.equal(subtext.innerHTML, `Subtext: Dave`);
     })
   })
   describe('Subtext Damien', () => {
    it('renders the App', () => {
      const name = 'Damien';
      const appWrapper = render(<App greeting={name}/>);
      assert.throws(() => appWrapper.getByText(/Subtext/));
      const button = document.getElementById('subtextButton');
      fireEvent(button,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );
      const subtext = appWrapper.getByText(/Subtext/);
      assert.equal(subtext.innerHTML, `Subtext: ${name}`);
     })
   })
})