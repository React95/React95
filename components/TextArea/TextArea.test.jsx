import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<TextArea />).toJSON()).toMatchSnapshot();
    });
  });
});
