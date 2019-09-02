import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Input />);
      expect(container).toMatchSnapshot();
    });
  });
});
