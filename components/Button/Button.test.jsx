import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Button />).toJSON()).toMatchSnapshot();
    });
  });
});
