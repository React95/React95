import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Icon name="bat" />);
      expect(container).toMatchSnapshot();
    });
  });
});
