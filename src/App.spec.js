import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should properly fully mount', () => {
    mount(<App />);
  });
});
