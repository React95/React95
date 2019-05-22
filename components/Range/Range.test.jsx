import React from 'react';
import { render } from 'react-testing-library';
import Range from './Range';

describe('<Range />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<Range />);
      expect(container).toMatchSnapshot();
    });
  });
});
