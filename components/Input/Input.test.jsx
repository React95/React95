import React from 'react';
import { render } from 'react-testing-library';
import Input from './Input';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Input />);
      expect(container).toMatchSnapshot();
    });
  });
});
