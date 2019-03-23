import React from 'react';
import Icon from './Icon';
import { render } from 'react-testing-library';

describe('<Icon />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Icon name="bat" />);
      expect(container).toMatchSnapshot();
    });
  });
});
