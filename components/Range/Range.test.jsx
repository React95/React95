import React from 'react';
import Range from './Range';
import { render } from 'react-testing-library';

describe('<Range />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<Range />);
      expect(container).toMatchSnapshot();
    });
  });
});
