import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<ProgressBar width={300} percent={50} />);
      expect(container).toMatchSnapshot();
    });
  });
});
