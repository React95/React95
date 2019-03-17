import React from 'react';
import ProgressBar from './ProgressBar';
import { render } from 'react-testing-library';

describe('<ProgressBar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<ProgressBar width={300} percent={50} />);
      expect(container).toMatchSnapshot();
    });
  });
});
