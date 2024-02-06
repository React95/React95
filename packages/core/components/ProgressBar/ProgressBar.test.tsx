import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '../shared/test/utils';
import { ProgressBar } from './ProgressBar';

describe('<ProgressBar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<ProgressBar width="300px" percent={50} />);

      expect(container).toMatchSnapshot();
    });
  });
});
