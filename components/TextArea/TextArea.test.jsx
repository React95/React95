import React from 'react';
import { render } from '@testing-library/react';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<TextArea />);
      expect(container).toMatchSnapshot();
    });
  });
});
