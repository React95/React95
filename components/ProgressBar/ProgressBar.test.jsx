import React from 'react';
import ProgressBar from './ProgressBar';
import renderer from 'react-test-renderer';

describe('<ProgressBar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      expect(
        renderer.create(<ProgressBar width={300} percent={50} />).toJSON()
      ).toMatchSnapshot();
    });
  });
});
