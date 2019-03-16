import React from 'react';
import Range from './Range';
import renderer from 'react-test-renderer';

describe('<Range />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Range />).toJSON()).toMatchSnapshot();
    });
  });
});
