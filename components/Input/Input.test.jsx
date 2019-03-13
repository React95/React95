import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Input />).toJSON()).toMatchSnapshot();
    });
  });
});
